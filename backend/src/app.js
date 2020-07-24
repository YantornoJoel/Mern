const express= require('express');
const cors= require('cors');
const app= express();
var bodyParser= require ("body-parser");



//SETTINGS
app.set('port', process.env.PORT  || 4000)


//MIDDLEWARES
app.use(bodyParser.json()); //Convierte cualquier peticion en formato json
app.use(bodyParser.urlencoded({extended:false})); //Carga y utiliza el bodyParse
app.use(cors());



//ROUTES
app.use('/api/notes', require('./routes/notes'));
app.use('/api/users', require('./routes/users'))



module.exports= app;