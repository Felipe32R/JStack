/* const express = require('express');

const router = express.Router(); */

const { Router } = require('express');

const router = Router();

router.get('/', (request, response) => {
  response.send('Hello World');
});

module.exports = router;
