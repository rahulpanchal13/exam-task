require("dotenv").config();
var express = require('express');
var cors=require('cors');
var middleware = require('./middleware/headerValidator');
var app = express();

var user = require('./modules/v1/User/route');

var api_document = require('./modules/v1/api_document/index')
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/v1/api_document/', api_document);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(middleware.extractHeaderLanguage);
app.use(middleware.validateHeaderApiKey);
app.use(middleware.validateHeaderToken);

app.use('/api/v1/user/', user);

try {
    app.listen(process.env.PORT);
    console.log("Connected successfully on port:", process.env.PORT);
} catch (error) {
    console.error("Error occurred: ", error);
}