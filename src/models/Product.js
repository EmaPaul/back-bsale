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
      let parametro="Nombre";

      switch(parametro) {
        case "Nombre":
          sql += ` AND name LIKE ?`;
          consultas.push(`%${name}%`);
          break;
        
        case "Categoria":
          sql += ` AND category LIKE ?`;
          consultas.push(`%${category}%`);
          break;

        case "PrecioMin":
          sql += ` AND price >= ?`;
          consultas.push(pricemin);
          break;
        
        case "PrecioMax":
          sql += ` AND price <= ?`;
          consultas.push(pricemax);
          break;
        
        case "DescuentoMin":
          sql += ` AND discount >= ?`;
          consultas.push(discountmin);
          break;
        
        case "DescuentoMax":
          sql += ` AND discount <= ?`;
          consultas.push(discountmax);
          break;
        
        default:
          return parametro;
      }
      return database.execute(sql, consultas);
    }
}
  
module.exports = Productos;