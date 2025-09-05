import User from '../models/user.js';

const mustChangePasswordMiddleware = async (req, res, next) => {
  const userId = req.params.userId;

  const user = await User.findByPk(userId);
  user && user.mustChangePassword ? res.status(403).json({ message: 'Password must be changed. Please use the /change-password route.' }) : (req.user = user, next());
};

const checkAdminRole = (req, res, next) => {
  req.user && req.user.role === 'admin' ? next() : res.status(403).json({ message: 'Access denied: You must be an admin.' });
};

export { mustChangePasswordMiddleware, checkAdminRole };