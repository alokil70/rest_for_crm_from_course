const express = require('express')
const bodyParser = require('body-parser')
const passport = require('passport')
const db = require('./models')
require('dotenv').config()
const PORT = process.env.SERVER_PORT || 9009

const app = express()

app.use(passport.initialize())
require('./middleware/passport')(passport)

app.use(require('morgan')('dev'))
app.use('/uploads', express.static('uploads'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(require('cors')())

const authRoutes = require('./routes/auth')
const analyticsRoutes = require('./routes/analytics')
const categoryRoutes = require('./routes/category')
const orderRoutes = require('./routes/order')
//const positionRoutes = require('./routes/position')
const productsRoutes = require('./routes/products')

app.use('/api/analytics', analyticsRoutes)
app.use('/api/category', categoryRoutes)
app.use('/api/order', orderRoutes)
//app.use('/api/position', positionRoutes)
app.use('/api/products', productsRoutes)
app.use('/api/auth', authRoutes)

//module.exports = app
db.sequelize.sync().then(() => {
    app.listen(PORT, () => console.log('Started on port: ' + PORT))
})
