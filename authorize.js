const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === "alex") {
    //add the object to the req obj
    req.user = { name: "alex", id: 1 };
    next();
  } else {
    res.status(401).send("<h1>Unauthorized</h1>");
  }
};
module.exports = authorize;
