const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 4000;
app.use(cors());
app.use(express.json());
const noteRoutes = require('./controller')

app.use('./notes', noteRoutes)


app.listen(port, () => {
  console.log(`Anonymous app listening on port ${port}`)
})
module.exports = app
