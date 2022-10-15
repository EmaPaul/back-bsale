const database= require('../db/db.js');

const Productos = class {
  constructor() {}
  
    static buscarProductos() {
      let sql = "SELECT * FROM product";
      return database.execute(sql);
    }
  
    static buscarId(id) {
      let sql = `SELECT * FROM product WHERE id = ?`;
      return database.execute(sql, [id]);
    }
  
    static buscarPorFiltros(name, category, pricemin, pricemax, discountmin, discountmax) {
      let sql = "SELECT * FROM product WHERE 1=1";
      let queries = [];
      if (name) {
        sql += ` AND name LIKE ?`;
        queries.push(`%${name}%`);
      }
      if (category) {
        sql += ` AND category LIKE ?`;
        queries.push(`%${category}%`);
      }
      if (pricemin) {
        sql += ` AND price >= ?`;
        queries.push(pricemin);
      }
      if (pricemax) {
        sql += ` AND price <= ?`;
        queries.push(pricemax);
      }
      if (discountmin) {
        sql += ` AND discount >= ?`;
        queries.push(discountmin);
      }
      if (discountmax) {
        sql += ` AND discount <= ?`;
        queries.push(discountmax);
      }
      return database.execute(sql, queries);
    }
}
  
module.exports = Productos;