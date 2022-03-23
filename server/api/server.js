const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
app.use(cors());
app.use(express,json());

app.listen(port, () => {
  console.log(`Anonymous app listening on port ${port}`)
})
module.exports = app
