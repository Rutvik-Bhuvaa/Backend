const Auth = (req, res, next) => {
  const token = "ABCDEF";
  const access = token === "ABCDEF" ? 1 : 0;

  if (!access) res.status(403).send("Permission Denied");
  else next();
};

module.exports = Auth;
