const plateSolver = (body, materialHot, materialCold) => {
  const deltaT = body.initialTempHot - body.initialTempCold;
  //Температура наружной стенки
  const Tw1 = body.initialTempHot - deltaT / 2;
  //Температура внутренней стенки
  const Tw2 = Tw1 - 1;
  //Средняя температура стенки
  const Taver = (Tw2 + Tw2) / 2;
};

module.exports = plateSolver;
