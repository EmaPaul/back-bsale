<h1>API Bsale  <img style ="margin-left:15px; border-radius:30px"src="https://res.cloudinary.com/dltjb3yhc/image/upload/v1663220828/banner/iconoBsale_mkkwpk.jpg"/></h1>

Api rest creada con MYSQL que nos permite obtener datos sobre 
los productos y sus categorias, al igual como filtrarlos por 
nombre, catergoria, precios y descuentos.

<br/>

<h2>Tecnologias Utilizadas</h2>
<ul>
<li>MYSQL: Sistema de gestión de bases de datos relacional.</li>
<li>Node js : Entorno de ejecucion para javascript construido con el motor v8 de Chrome.</li>
<li>Javascript : Lenguaje de programacion interpretado, orientado a objetos.</li>
<li>Express : Entorno de trabajo para aplicaciones web.</li>
</ul>

## Procedimiento

Para empezar la creacion de la api se instalo express para crear nuestro entorno de trabajo, despues se utilizo javacript 
para realizar las configuraciones, al igual que node js para hacer las pruebas necesarias y ver el funcionamiento de las 
configuraciones.Se utilizo dependecias como mysql2 para crear conecciones y consultas, y tambien dotenv para proteger 
las variables de entorno. Por ultimo se utilizo nodemon para reiniciar el servidor cuando se realice un cambio y morgan para registrar cada una de las consultas que realiza a la api.


<h2>Funcionamiento</h2>
La api se conecta a una base de datos en MYSQL creando un pool de conecciones, que permiten estar conectado cuando alguna
coneccion termina por inactividad a esto se le llama keep alive, significa que el servidor no cerrara la coneccion despues
de cumplir con la solucitud. Se crearon modelos para el funcionamiento de los controladores y rutas para los productos y las categorias.

<br/>
<br/>

<h2>Documentacion</h2>

<br/>

## Obtener productos 
Se obtiene un objeto con una clave productos, y de valor una matriz donde estan todos los productos
como valor.

```

GET: https://back-bsale-emapaul.vercel.app/product

{

 "productos": [
    {
        // informacion de los productos
    },
  ]
  
}

```

## Obtener categorias
Se obtiene un objeto con una clave categorias, y de valor una matriz donde estan todas las categorias
de los productos como valor.

```

GET: https://back-bsale-emapaul.vercel.app/category

{

 "categorias": [
    {
        // informacion de las categorias
    },
  ]

}

```
## Obtener productos por id
Se obtiene un objeto con una clave producto, y de valor un objeto con la informacion del producto segun el id de mismo.

```

GET: https://back-bsale-emapaul.vercel.app/product/:id

{
    "producto": {
        // informacion del producto traido por id
    }
}

```
## Obtener productos por nombre
Se obtiene un objeto con la clave productos, y de valor un objeto con el producto o los productos que coincidan con el nombre que se pasa como valor .
```
GET: https://back-bsale-emapaul.vercel.app/product/search?name="nombre del producto"

{
    "productos": [
        {
            // datos del producto 1
        },
        {
            // datos del producto 2
        }
}
```
<br/>

<h1>Levantar el servidor de manera local</h1>
<br/>

Para laventar el servidor de manera local primero se debe crear un archivo .env en el cual debe contener la siguiente informacion.

```
DB_HOST=  "servidor de la base de datos"
DB_USER=  "usuario de la base de datos"
DB_PASSWORD= "contraseña de la base de datos"
DB_DATABASE=  "nombre de la base de datos"
```
Antes se debe crear una base de datos en mysql con las tablas de productos y categorias.

```
Product

id: Identificador único del producto (int)
name: Nombre del producto (varchar)
url_image: URL de la imagen asociada al producto (varchar)
price: Precio de venta del producto (float)
discount: Porcentaje de descuento del producto (int)
category: Identificador de la categoría (int)

```

```
Category

id: Identificador único del producto (int)
name: Nombre del producto (varchar)

```
<br/>

Finalmente ejecutar con cualquiera de los el siguientes comandos:

```
npm run dev
nodemon run dev
npm start 
```

## Produccion
Esta api fue deployada con vercel:
<br/>
<ul>
<li>productos: <a href="https://back-bsale-emapaul.vercel.app/product">https://back-bsale-emapaul.vercel.app/product</a></li>
<li>categorias: <a href="https://back-bsale-emapaul.vercel.app/category">https://back-bsale-emapaul.vercel.app/category</a></li></li>
</ul>

<br/>

<h2>Portafolio</h2>
<ul>
<li><a href="https://portafolio-ema-paul.vercel.app/">Sobre mi 😄</a></li>
</ul>
