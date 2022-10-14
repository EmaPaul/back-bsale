const database = require('../db/db.js');

const Categorias = class {
    constructor() {}
  
    static buscarCategorias() {
      let sql = "SELECT * FROM category";
      return database.execute(sql);
    }
}
  
module.exports = Categorias;