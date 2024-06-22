const express = require("express")
const bodyParser = require("body-parser")

const app = express()
app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.send("123")
})

app.post("/api/webhook", (req, res) => {
    try {
        const webhookData = req.body
        console.log("Webhook data ---------")
        console.log(webhookData)
    } catch (error) {
        console.log("Error when trying to print webhook endpoint data")
    }

    res.sendStatus(200)
})

const PORT = 3003

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})
