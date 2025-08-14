import User from '../models/user.js';

const mustChangePasswordMiddleware = async (req, res, next) => {
  const userId = req.params.userId;

  if (!userId) {
      return res.status(401).json({ message: 'Authentication required.' });
  }

  const user = await User.findByPk(userId);
  if (user && user.mustChangePassword) {
    return res.status(403).json({ message: 'Password must be changed. Please use the /change-password route.' });
  }

  req.user = user;
  next();
};

export { mustChangePasswordMiddleware };