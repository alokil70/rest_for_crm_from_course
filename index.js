const app = require('./app')
require('dotenv').config()


const PORT = process.env.SERVER_PORT || 9009
app.listen(PORT, () => console.log(`Server port ${PORT}`))

