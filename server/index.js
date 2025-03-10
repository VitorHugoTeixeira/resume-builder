// index.js

const express = require("express");
const cors = require("cors")
const app = express()

const PORT = 4000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.json(
        {
            message: "Hello Word"
        }
    )
})


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})