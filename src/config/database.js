const mongoose = require("mongoose")

async function conectDatabase() {
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log("MongoDB conectado com sucesso")
    } catch (error) {
        console.error("Erro ao conectar ao MongoDB: ", error.message)
        process.exit(1)
    }
}

module.exports = conectDatabase