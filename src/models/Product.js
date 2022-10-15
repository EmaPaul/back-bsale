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
  
    // static findByFilters(name, category, pricemin, pricemax, discountmin, discountmax) {
    //   let sql = "SELECT * FROM product WHERE 1=1";
    //   let queries = [];
    //   if (name) {
    //     sql += ` AND name LIKE ?`;
    //     queries.push(`%${name}%`);
    //   }
    //   if (category) {
    //     sql += ` AND category LIKE ?`;
    //     queries.push(`%${category}%`);
    //   }
    //   if (pricemin) {
    //     sql += ` AND price >= ?`;
    //     queries.push(pricemin);
    //   }
    //   if (pricemax) {
    //     sql += ` AND price <= ?`;
    //     queries.push(pricemax);
    //   }
    //   if (discountmin) {
    //     sql += ` AND discount >= ?`;
    //     queries.push(discountmin);
    //   }
    //   if (discountmax) {
    //     sql += ` AND discount <= ?`;
    //     queries.push(discountmax);
    //   }
    //   return database.execute(sql, queries);
    // }
}
  
module.exports = Productos;