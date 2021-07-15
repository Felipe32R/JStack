const express = require('express');
require('express-async-errors');

const routes = require('./routes');

const app = express();

/* // CRIANDO MIDDLEWARES
app.use((request, response, next) => {

});
 */
app.use(express.json());

app.use(routes);

app.use((error, request, response, next) => { // Error Handler (Middleware express)
  console.log('### ERROR HANDLER');
  console.log(error);
  response.sendStatus(500);
});

app.listen(3000, () => console.log('🔥 Server started at http://localhost:3000'));

// Middleware 1 -> Middleware 2 -> Middleware 3 -> Route
