const app = require('./app')
const env = require('dotenv')

env.config()

const PORT = process.env.SERVER_PORT || 9009
app.listen(PORT, () => console.log(`Server port ${PORT}`))

