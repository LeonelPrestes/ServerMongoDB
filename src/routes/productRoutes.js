const express = require("express");
const verificarAdmin = require("../middlewares/adminMiddleware.js")

const productController = require("../controllers/productController.js");

const router = express.Router();

router.get("/produtos", productController.listarProdutos);

router.get("/produtos/:id", productController.buscarProdutoPorId);

router.post("/produtos", verificarAdmin, productController.criarProduto);

router.put("/produtos/:id", verificarAdmin, productController.atualizarProduto);

router.delete("/produtos/:id", verificarAdmin, productController.deletarProduto);

module.exports = router;