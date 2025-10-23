export const loggerMiddleware = (req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
};
