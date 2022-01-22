const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');

//Conexão com o Banco de Dados
const connectDB = require('./DB/Connection');
connectDB();

//Rotas da API
const routes = require('./src/routes');

const port = process.env.port || 5000;

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(routes);

app.listen(port,()=>console.log('Server runing on port', port));