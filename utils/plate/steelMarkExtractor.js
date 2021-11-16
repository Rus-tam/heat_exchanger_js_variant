const steelMarkExtraction = steelProps => {
  const steelMarks = [];

  steelProps.forEach(steel => {
    steelMarks.push({
      mark: steel.mark,
    });
  });

  return steelMarks;
};

module.exports = steelMarkExtraction;
