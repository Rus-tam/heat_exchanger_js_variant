const Material = require('../model/material');

const interpolationMaterial = async (temperature, materialName) => {
  const number = Math.round(temperature);

  let inBiggerDirection = number;
  let inLessDirection = number;

  if (number > 100) {
    //В большую сторону
    while (inBiggerDirection % 20 !== 0) {
      inBiggerDirection++;
    }
    //В меньшую сторону
    while (inLessDirection % 20 !== 0) {
      inLessDirection--;
    }
  } else if (number < 100) {
    //В большую сторону
    while (inBiggerDirection % 10 !== 0 || inLessDirection % 20 !== 0) {
      inBiggerDirection++;
    }
    //В меньшую сторону
    while (inLessDirection % 10 !== 0) {
      inLessDirection--;
    }
  }

  //Скачиваем из БД свойства материала при граничных температурах
  const biggerMaterial = await Material.find({ $and: [{ temperature: inBiggerDirection }, { material: materialName }] });
  const lessMaterial = await Material.find({ $and: [{ temperature: inLessDirection }, { material: materialName }] });

  //Начинаем интерполяцию
  const resultingMaterial = {
    temperature,
    kinematicViscosity:
      lessMaterial[0].kinematicViscosity +
      ((biggerMaterial[0].kinematicViscosity - lessMaterial[0].kinematicViscosity) / (inBiggerDirection - inLessDirection)) * (temperature - inLessDirection),
    thermalConductivity:
      lessMaterial[0].thermalConductivity +
      ((biggerMaterial[0].thermalConductivity - lessMaterial[0].thermalConductivity) / (inBiggerDirection - inLessDirection)) * (temperature - inLessDirection),
    dynamicViscosity:
      lessMaterial[0].dynamicViscosity +
      ((biggerMaterial[0].dynamicViscosity - lessMaterial[0].dynamicViscosity) / (inBiggerDirection - inLessDirection)) * (temperature - inLessDirection),
    massDensity:
      lessMaterial[0].massDensity +
      ((biggerMaterial[0].massDensity - lessMaterial[0].massDensity) / (inBiggerDirection - inLessDirection)) * (temperature - inLessDirection),
    material: materialName,
  };

  console.log(resultingMaterial);
};

module.exports = interpolationMaterial;
