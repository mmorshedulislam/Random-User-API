const errorHandler = (err, req, res, next) => {
  console.log(err, req, res, next);
  //   next();
};

module.exports = errorHandler;
