const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

const corsOptions = {
  origin: 'http://localhost:3001',
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(require('./auth.js'));

require('./routes')(app);

const port = process.env.PORT || 8080
app.listen(port, () => {
 console.log("Server running on port", port);
});

