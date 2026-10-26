const express = require("express")
const cors = require("cors")
const { translate } = require("./models/api")
const { Translator } = require("./models/Translator")

const app = express()
const PORT = 3000

Translator.getTranslator()

app.use(express.json());

app.use(cors(
    {
        origin: "http://localhost:5173"
    }
))

app.get("/", (req, res) => {
    res.send("Olá ")
})

app.post("/translate", async (req, res) => {
    console.log("Nova requisição")
    const textENG = req.body["text"]
    const textPTBR = await translate(textENG)
    console.log("Texto traduzido: ", textPTBR[0]["translation_text"])
    res.send(textPTBR)
})


app.listen(PORT, () => {
    console.log(`Servidor ouvindo na porta ${PORT}`)
})