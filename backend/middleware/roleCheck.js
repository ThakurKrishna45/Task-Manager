const roleCheck = (req, res, next) => {
  if (req.user && (req.user.role === 'admin' || req.user.role === 'head')) {
    return next();
  }
  return res.status(403).json({ message: 'Forbidden: Only admin or head can perform this action.' });
};

module.exports = roleCheck;