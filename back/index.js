const express = require('express');
const app = express();

const port = 4000;

app.listen(port, (err) => {
  if(err) {
      throw new Error('Something bad happened ...')
  }
  console.log(`Server is listening on ${port}`)
})