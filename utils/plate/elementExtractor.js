const elementExtractor = (materials) => {
  let elements = [];
  let result = [];

  materials.forEach((element) => {
    if (!elements.includes(element.material)) {
      elements.push(element.material);
    }
  });
  elements.forEach((element) => {
    result.push({
      name: element,
    });
  });

  return result;
};

module.exports = elementExtractor;
