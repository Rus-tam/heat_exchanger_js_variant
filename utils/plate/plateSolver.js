const plateSolver = (body, materialHot, materialCold, steelProp) => {
  const deltaT = body.initialTempHot - body.initialTempCold;
  //Температура наружной стенки
  const Tw1 = body.initialTempHot - deltaT / 2;
  //Температура внутренней стенки
  const Tw2 = Tw1 - 1;
  //Средняя температура стенки
  const Taver = (Tw2 + Tw2) / 2;

  const wallLambda = interpolationSteel(Taver, steelProp, body.constructionMark);

  const d = (2 * body.plateDistance * body.plateWidth) / (body.plateDistance + body.plateWidth);

  //Скорость течения для горячего теплоносителя
  const w1 = body.massFlowHot / (materialHot.massDensity * body.chanelNumberHot * body.plateDistance * body.plateWidth);
  const Re1 = (w1 * d) / materialHot.kinematicViscosity;
  console.log(wallLambda);
};

module.exports = plateSolver;

const interpolationSteel = (temperature, steelProp, constructionMark) => {
  //Формируем перечень реперных температур
  let referenceList = [];
  for (let i = 0; i <= 1150; i += 50) {
    referenceList.push(i);
  }
  const number = Math.round(temperature);
  let steelMarkLambda = [];
  steelProp.forEach(steel => (steel.mark === constructionMark ? (steelMarkLambda = steel.values) : null));

  let inBiggerDirection = number;
  let inLessDirection = number;

  while (!referenceList.includes(inBiggerDirection)) {
    inBiggerDirection++;
  }
  while (!referenceList.includes(inLessDirection)) {
    inLessDirection--;
  }

  const biggerLambda = steelMarkLambda[referenceList.indexOf(inBiggerDirection)];
  const smallerLambda = steelMarkLambda[referenceList.indexOf(inLessDirection)];

  return smallerLambda + ((biggerLambda - smallerLambda) / (inBiggerDirection - inLessDirection)) * (temperature - inLessDirection);
};
