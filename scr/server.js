const express = require("express");
const logger = require("./middlewares/loggerMiddleware.js")

const productRoutes = require("./routes/productRoutes.js");

const app = express();

app.use(express.json());

app.use(logger)

app.use(productRoutes);

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});