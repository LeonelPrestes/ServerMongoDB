const express = require("express");
const logger = require("./middlewares/loggerMiddleware.js")
const errorHandler = require("./middlewares/errorMiddleware.js")
const productRoutes = require("./routes/productRoutes.js");

const app = express();

app.use(express.json());

app.use(logger)

app.use(productRoutes);

app.use((req, res) => {
    res.status(404).json({
        erro: "Rota não encontrada"
    })
})

app.use(errorHandler)


app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});