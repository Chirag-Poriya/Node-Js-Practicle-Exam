const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
  const token = req.cookies.token;
  if (!token) return res.status(403).send('Access denied');
  
  jwt.verify(token, 'secretKey', (err, user) => {
    if (err) return res.status(403).send('Invalid token');
    req.user = user;
    next();
  });
}

module.exports = authenticateToken;
