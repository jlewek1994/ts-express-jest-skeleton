function validationMiddleware (req, res, next) {
  const id = parseInt(req.params.post_id);

  if (!Number.isInteger(id)) {
    res.status(400).send('post_id parametr is not a number');
  } else if (!(id > 0 && id <= parseInt(process.env.MAX_POST_ID))) {
    res.status(404).send('post with this ID not found');
  } else {
    next();
  }
}

export default validationMiddleware;
