const Product = require("../models/Product");

exports.getProduct = async (req, res, next) => {
  try {
    const [productos] = await Product.buscarProductos();
    res.status(200).json({productos});
  } catch (error) {
    console.log(error);
    next(error);
  }
}

exports.getProductbyId = async (req, res, next) => {
  try {
    const [producto] = await Product.buscarId(req.params.id);
    res.status(200).json({producto: producto[0]});
  } catch (error) {
    console.log(error);
    next(error);
  }
}

exports.getProductbyFilter = async (req, res, next) => {
  try {
    const [productos] = await Product.buscarPorFiltros(
      req.query.name, 
      req.query.category,
      req.query.pricemin,
      req.query.pricemax,
      req.query.discountmin,
      req.query.discountmax
    );
    res.status(200).json({productos});
  } catch (error) {
    console.log(error);
    next(error);
  }
}