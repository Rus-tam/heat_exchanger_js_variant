const elementExtractor = require("../utils/plate/elementExtractor");
const plateSolver = require("../utils/plate/plateSolver");
const dataExtractor = require("../utils/plate/dataExtractor");
const steelMarkExtractor = require("../utils/plate/steelMarkExtractor");
const Material = require("../model/material");
const SteelProp = require("../model/steelProp");

exports.getPlate = async (req, res) => {
  const materials = await Material.find().lean();
  const steelProp = await SteelProp.find().lean();
  await console.log(steelProp);
  steelMarkExtractor(steelProp);

  const element = elementExtractor(materials);
  res.render("plate", {
    title: "Пластинчатый теплообменник",
    element,
  });
};

exports.postInitialData = async (req, res) => {
  try {
    const materialHot = await Material.find({
      material: req.body.elementNameHot,
    }).lean();
    const materialCold = await Material.find({
      material: req.body.elementNameCold,
    }).lean();
    const body = dataExtractor(req.body);
    plateSolver(body, materialHot, materialCold);
  } catch (e) {
    res.render("error", {
      docTitle: "Ошибка",
      message: "Что-то пошло не так!",
      error: e,
    });
  }
};
