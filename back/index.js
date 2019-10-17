const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./Routes/index')

const app = express();


const port = 4000;


app.use(cors())

app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(bodyParser.json())

app.use("/characteristics", routes.Characteristics)

app.get('/', (req, res) => {
  res.status(200).send('stay a while and listen')
})

app.listen(port, (err) => {
  if(err) {
      throw new Error('Something bad happened ...')
  }
  console.log(`Server is listening on ${port}`)
})

