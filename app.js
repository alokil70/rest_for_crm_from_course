const express = require('express')
const bodyParser = require('body-parser')


const app = express()

const db = require('./config/database')
db.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error ' + err))


app.use(require('morgan')('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(require('cors')())


const authRoutes = require('./routes/auth')
const analyticsRoutes = require('./routes/analytics')
const categoryRoutes = require('./routes/category')
const orderRoutes = require('./routes/order')
const positionRoutes = require('./routes/position')
const productsRoutes = require('./routes/products')


app.use('/api/analytics', analyticsRoutes)
app.use('/api/category', categoryRoutes)
app.use('/api/order', orderRoutes)
app.use('/api/position', positionRoutes)
app.use('/api/products', productsRoutes)
app.use('/api/auth', authRoutes)


module.exports = app
