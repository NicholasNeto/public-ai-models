const express = require("express")
const cors = require("cors")
const { translate } = require("./models/api")

const app = express()
const PORT = 3000

app.use(express.json());

app.use(cors(
    {
        origin: "http://localhost:5173"
    }
))

app.get("/", (req, res) => {
    res.send("Olá ")
})

app.post("/translate", (req, res) => {
    console.log("Nova requisição")
    const textENG = req.body["text"]
    res.send(translate(textENG))
})


app.listen(PORT, () => {
    console.log(`Servidor ouvindo na porta ${PORT}`)
})