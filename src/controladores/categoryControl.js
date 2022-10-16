const Category = require("../models/Category");

exports.getCategory = async (req, res, next) => {
  try {
    const [categorias] = await Category.buscarCategorias();
    res.status(200).json({categorias});
  } catch (error) {
    console.log(error);
    next(error);
  }
}