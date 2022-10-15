const database = require('../db/db.js');

const Category = class {
    constructor() {}
  
    static buscarCategorias() {
      let sql = "SELECT * FROM category";
      return database.execute(sql);
    }
}
  
module.exports = Category;