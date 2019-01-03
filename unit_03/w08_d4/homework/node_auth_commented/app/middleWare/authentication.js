const jwt = require('jsonwebtoken');

function authenticate(req, res, next) {
  const { token } = req.cookies;
  const nonRestricedRoutes = ['/login', '/signup', '/signout'];

  if (nonRestricedRoutes.includes(req.path)) { return next(); }
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
      if (err) {
        return res.json({
          success: false,
          message: 'Failed to authenticate token.',
        });
      }
      req.decoded = decoded;
      next();
    });
  } else {
    return res.status(403).send({
      success: false,
      message: 'No token provided.',
    });
  }
}

module.exports = authenticate;
