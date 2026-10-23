const express = require("express")

const app = express()
const PORT = 3000

app.get("/", (req, res) => {
    res.send("Olá ")
})

app.post("/translate", (req, res) => {
    res.send({
        translated_text: "Legenda traduzida"
    })
})


app.listen(PORT, () => {
    console.log(`Servidor ouvindo na porta ${PORT}`)
})