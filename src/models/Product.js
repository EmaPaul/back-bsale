const database= require('../db/db.js');

const Productos = class {
  constructor() {}
  
    static findAll() {
      let sql = "SELECT * FROM product";
      return database.execute(sql);
    }
  
    static findById(id) {
      let sql = `SELECT * FROM product WHERE id = ?`;
      return database.execute(sql, [id]);
    }
  
    static findByFilters(name, category, pricemin, pricemax, discountmin, discountmax) {
      let sql = "SELECT * FROM product WHERE 1=1";
      let queries = [];
      let parametro="Nombre";

      switch(parametro) {
        case "Nombre":
          sql += ` AND name LIKE ?`;
          queries.push(`%${name}%`);
          break;
        
        case "Categoria":
          sql += ` AND category LIKE ?`;
          queries.push(`%${category}%`);
          break;

        case "PrecioMin":
          sql += ` AND price >= ?`;
          queries.push(pricemin);
          break;
        
        case "PrecioMax":
          sql += ` AND price <= ?`;
          queries.push(pricemax);
          break;
        
        case "DescuentoMin":
          sql += ` AND discount >= ?`;
          queries.push(discountmin);
          break;
        
        case "DescuentoMax":
          sql += ` AND discount <= ?`;
          queries.push(discountmax);
          break;
        
        default:
          return parametro;
      }
      return database.execute(sql, queries);
    }
}
  
module.exports = Productos;