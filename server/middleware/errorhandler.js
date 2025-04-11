const errorHandler = (err, req, res, next) => {
  res.status(res.statusCode || 404).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
};

module.exports = errorHandler;
