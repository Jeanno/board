const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');

const { db } = require('./db.js');
const app = express();

const corsOptions = {
  origin: 'http://localhost:3001',
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

require('./routes')(app);

app.listen(3000, () => {
 console.log("Server running on port 3000");
});

