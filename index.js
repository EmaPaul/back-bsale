const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

// Puerto 
app.set('port',process.env.PORT || 3000);

// Middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

// rutas
app.use("/product",require('./src/routes/product.js'));
app.use("/category",require('./src/routes/category.js'));

// controlador de errores 
app.use((err, req, res, next) => {
    console.log(err.status);
    console.log(err.message);
  
    res.status(err.status || 500);
    res.json({
      error: err,
      message: err.message
    });
});

// levantando el servidor

app.listen(app.get('port'), ()=>{ 
  console.log("Server on port", app.get('port'))
})

module.exports = app;