const elementExtractor = require('../utils/plate/elementExtractor');
const plateSolver = require('../utils/plate/plateSolver');
const dataExtractor = require('../utils/plate/dataExtractor');
const steelMarkExtractor = require('../utils/plate/steelMarkExtractor');
const interpolationMaterial = require('../utils/interpolationMaterial');
const Material = require('../model/material');
const SteelProp = require('../model/steelProp');

const resultingData = [];

exports.getPlate = async (req, res) => {
  const materials = await Material.find().lean();
  const steelProp = await SteelProp.find().lean();
  steelMarkExtractor(steelProp);

  const element = elementExtractor(materials);
  res.render('plate', {
    title: 'Пластинчатый теплообменник',
    element,
  });
};

exports.postInitialData = async (req, res) => {
  try {
    const body = dataExtractor(req.body);
    const materialHot = await interpolationMaterial(body.initialTempHot, body.elementNameHot);
    const materialCold = await interpolationMaterial(body.initialTempCold, body.elementNameCold);
    console.log(materialCold);
    console.log(materialHot);
    // plateSolver(body, materialHot, materialCold);
    res.send(body);
  } catch (e) {
    res.render('error', {
      docTitle: 'Ошибка',
      message: 'Что-то пошло не так!',
      error: e,
    });
  }
};
