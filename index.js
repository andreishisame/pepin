const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Tigara la 1,20 lei!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))