const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(cors())

//route constants
const gettingready = require('./routes/gettingready')
const beforetheceremony = require('./routes/beforetheceremony')
const ceremony = require('./routes/ceremony')
const mrandmrs = require('./routes/mrandmrs')
const reception = require('./routes/reception')
const tripphotos = require('./routes/tripphotos')

//using routes
app.use('/gettingready', gettingready)
app.use('/beforetheceremony', beforetheceremony)
app.use('/ceremony', ceremony)
app.use('/mrandmrs', mrandmrs)
app.use('/reception', reception)
app.use('/tripphotos', tripphotos)


module.exports = app