const elementExtractor = require('../utils/plate/elementExtractor');
const plateSolver = require('../utils/plate/plateSolver');
const dataExtractor = require('../utils/plate/dataExtractor');
const steelMarkExtractor = require('../utils/plate/steelMarkExtractor');
const interpolationMaterial = require('../utils/interpolationMaterial');
const Material = require('../model/material');
const ConstrProp = require('../model/constrProp');

const resultingData = [];

exports.getPlate = async (req, res) => {
  const materials = await Material.find().lean();
  const constProp = await ConstrProp.find().lean();

  const element = elementExtractor(materials);
  const steelMarks = steelMarkExtractor(constProp);

  res.render('plate', {
    title: 'Пластинчатый теплообменник',
    element,
    steelMarks,
  });
};

exports.postInitialData = async (req, res) => {
  try {
    const constProp = await ConstrProp.find().lean();
    const body = dataExtractor(req.body);
    const materialHot = await interpolationMaterial(body.initialTempHot, body.elementNameHot);
    const materialCold = await interpolationMaterial(body.initialTempCold, body.elementNameCold);
    plateSolver(body, materialHot, materialCold, constProp);
    res.send(body);
  } catch (e) {
    res.render('error', {
      docTitle: 'Ошибка',
      message: 'Что-то пошло не так!',
      error: e,
    });
  }
};
