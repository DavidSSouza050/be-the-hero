const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();


// transformando o json para algo entendivel para a applicação
app.use(cors());
app.use(express.json());
app.use(routes);



app.listen(3333);
