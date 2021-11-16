const dataExtractor = body => {
  return {
    elementNameHot: body.elementNameHot,
    initialTempHot: parseFloat(body.initialTempHot),
    finalTempHot: parseFloat(body.finalTempHot),
    massFlowHot: parseFloat(body.massFlowHot),
    elementNameCold: body.elementNameCold,
    initialTempCold: parseFloat(body.initialTempCold),
    finalTempCold: parseFloat(body.finalTempCold),
    massFlowCold: parseFloat(body.massFlowCold),
    plateWidth: parseFloat(body.plateWidth),
    plateHeight: parseFloat(body.plateHeight),
    plateDistance: parseFloat(body.plateDistance),
    plateThickness: parseFloat(body.plateThickness),
    chanelNumberHot: parseFloat(body.chanelNumberHot),
    chanelNumberCold: parseFloat(body.chanelNumberCold),
    constructionMark: body.constructionMark,
  };
};

module.exports = dataExtractor;
