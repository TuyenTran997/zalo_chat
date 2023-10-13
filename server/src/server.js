const express = require('express');
const PORT = 8080
const app = express()
const bodyParser = require('body-parser')
const authRouter = require('./routers/auth.routes')
const dotenv = require('dotenv')
const cors = require('cors')
dotenv.config()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.use('/api/v1/auth', authRouter)


app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
})
