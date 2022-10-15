const express = require("express");
const productRouter = require("./src/routes/products");
const handlebars = require("express-handlebars");
const path = require("path");

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


console.log(__dirname)
const folderViews = path.join(__dirname, "/src/views/");
console.log(folderViews)

app.listen(8080,()=>console.log("Servidor funcionando en el puerto  8080"));
app.engine("handlebars",handlebars.engine());
app.set('views', folderViews)
app.set("view engine", "handlebars");

app.use(express.static('public'))

app.use("/api/productos", productRouter);

