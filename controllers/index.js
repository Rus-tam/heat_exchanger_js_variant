const Material = require("../model/material");

exports.getIndex = (req, res) => {
  try {
    res.render("index", {
      title: "Введите исходные данные",
    });
  } catch (e) {
    res.render("error", {
      docTitle: "Ошибка",
      message: "Что-то пошло не так!",
      error: e,
    });
  }
};

exports.postExchangerSelection = (req, res) => {
  try {
    const selectedExchanger = req.body.exchanger;

    if (selectedExchanger === "shellTube") {
      res.redirect("/shellTube");
    } else if (selectedExchanger === "plate") {
      res.redirect("/plate");
    } else {
      res.redirect("/airCooler");
    }
  } catch (e) {
    res.render("error", {
      docTitle: "Ошибка",
      message: "Что-то пошло не так!",
      error: e,
    });
  }
};

exports.getInfo = (req, res) => {
  res.render("info", {
    title: "Инфо",
  });
};
