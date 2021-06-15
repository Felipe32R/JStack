const express = require('express');

const routes = require('./routes');

const app = express();

/* // CRIANDO MIDDLEWARES
app.use((request, response) => {

});
 */
app.use(express.json());

app.use(routes);

app.listen(3000, () => console.log('🔥 Server started at http://localhost:3000'));

// Middleware 1 -> Middleware 2 -> Middleware 3 -> Route
