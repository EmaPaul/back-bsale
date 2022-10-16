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
      let consultas = [];
      if (name) {
        sql += ` AND name LIKE ?`;
        consultas.push(`%${name}%`);
      }
      if (category) {
        sql += ` AND category LIKE ?`;
        consultas.push(`%${category}%`);
      }
      if (pricemin) {
        sql += ` AND price >= ?`;
        consultas.push(pricemin);
      }
      if (pricemax) {
        sql += ` AND price <= ?`;
        consultas.push(pricemax);
      }
      if (discountmin) {
        sql += ` AND discount >= ?`;
        consultas.push(discountmin);
      }
      if (discountmax) {
        sql += ` AND discount <= ?`;
        consultas.push(discountmax);
      }
      return database.execute(sql, consultas);
    }
}
  
module.exports = Productos;