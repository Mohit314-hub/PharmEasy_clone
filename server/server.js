const productsData = require('./public/products')
const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())

const PORT = process.env.port || 8000

app.get("/api/products", (req, res) => {
    res.status(200).send(productsData)
})

app.listen(PORT, () => {console.log(`Server is up and running at port ${PORT} `)})