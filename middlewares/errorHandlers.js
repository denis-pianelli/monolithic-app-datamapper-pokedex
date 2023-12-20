function catchErrors(controllerMethod) {
  return (req, res, next) => {
    controllerMethod(req, res, next).catch((error) => next(error));
  };
}

function notFound(req, res, next) {
  res.render('404')
}

function handleError(err, req, res, next) {
  const statusCode = err.status || 500;
  res
    .status(statusCode)
    .render('error', { error: err.message, stack: err.stack });
}

module.exports = { notFound, handleError, catchErrors };
