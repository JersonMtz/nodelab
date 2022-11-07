const path = require('path');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname , '../public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded());

// routes
app.use(require('./routes/index.js'));

app.listen(3000, () => console.log('server on port 3000'));