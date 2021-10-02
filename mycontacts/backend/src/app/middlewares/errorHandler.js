// Error Handler (Middleware express)
module.exports = (error, request, response, next) => {
  console.log('errorHandler:', error);

  response.sendStatus(500);
};
