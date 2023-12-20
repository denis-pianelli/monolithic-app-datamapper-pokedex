function checkId(req, res, next) {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    return res.render('404');
  } else {
    res.id = id;
  }

  next();
}

module.exports = checkId;
