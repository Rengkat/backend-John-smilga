const asyncWrapper = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      next(error); //middleware error
    }
  };
};
module.exports = asyncWrapper;
