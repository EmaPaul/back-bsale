const Category = require("../models/Category");

exports.getCategory = async (req, res, next) => {
  try {
    const [categories] = await Category.buscarCategorias();
    res.status(200).json({categories});
  } catch (error) {
    console.log(error);
    next(error);
  }
}