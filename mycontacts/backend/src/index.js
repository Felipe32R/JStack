// const { response } = require('express');
const express = require('express');
require('express-async-errors');

const routes = require('./routes');

const app = express();
const cors = require('./app/middlewares/cors');
const errorHandler = require('./app/middlewares/errorHandler');
/* // CRIANDO MIDDLEWARES
app.use((request, response, next) => {

});
 */
app.use(express.json());

/* cors */
app.use(cors);

app.use(routes);

app.use(errorHandler);

app.listen(3001, () => console.log('🔥 Server started at http://localhost:3001'));

// Middleware 1 -> Middleware 2 -> Middleware 3 -> Route
