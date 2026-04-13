const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5001

app.use(express.static('dist'))

const start = async () => {
  await app.listen(PORT)
  console.log(`server started on port ${PORT}`)
}

app.get('/version', (req, res) => {
  res.send('1.0.4') // changed just so there is something changed again
})

app.get('/health', (req, res) => {
  res.send('good')
})

start()
