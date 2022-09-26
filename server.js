const express = require('express');
const app = express();
// const routes = require('./routes');

const PORT = process.env.PORT || 3001;

// app.use(routes);

app.use(express.static('public'));


app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
