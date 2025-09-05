import express from 'express';
import 'dotenv/config';
import sequelize from './config/db.js';
import User from './models/user.js';
import bcrypt from 'bcrypt';
import { mustChangePasswordMiddleware, checkAdminRole } from './middleware/auth.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/register', async (req, res) => {
  const { email, password } = req.body;

  const existingUser = await User.findOne({ where: { email } });
  if (existingUser) return res.status(409).json({ message: 'Email is already registered.' });
  
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({
    email,
    password: hashedPassword,
  });

  res.status(201).json({ message: 'User registered successfully!', user: newUser });
});

app.post('/change-password', async (req, res) => {
  const { userId, newPassword } = req.body;
  const user = await User.findByPk(userId);
  
  if (!user) return res.status(404).json({ message: 'User not found.' });

  const hashedPassword = await bcrypt.hash(newPassword, 10);
  await user.update({
    password: hashedPassword,
    mustChangePassword: false,
  });

  res.status(200).json({ message: 'Password changed successfully.' });
});

app.get('/protected-route/:userId', mustChangePasswordMiddleware, (req, res) => {
  res.status(200).json({ message: `Welcome, user ${req.user.email}!` });
});

app.post('/delete-account', async (req, res) => {
  const { password, userId } = req.body;

  const user = await User.findByPk(userId);
  const isPasswordCorrect = user && (await bcrypt.compare(password, user.password));
  
  !isPasswordCorrect ? res.status(401).json({ message: 'Invalid password.' }) : (await user.destroy(), res.status(200).json({ message: 'Account deleted successfully.' }));
});

app.get('/admin', checkAdminRole, (req, res) => {
  res.status(200).json({ message: `Welcome, admin!` });
});

app.post('/change-email', async (req, res) => {
  const { newEmail, currentPassword, userId } = req.body;

  const user = await User.findByPk(userId);
  const isPasswordCorrect = user && (await bcrypt.compare(currentPassword, user.password));
  if (!isPasswordCorrect) return res.status(401).json({ message: 'Invalid password.' });

  const existingUser = await User.findOne({ where: { email: newEmail } });
  if (existingUser) return res.status(409).json({ message: 'Email is already taken.' });

  await user.update({ email: newEmail });
  res.status(200).json({ message: 'Email changed successfully.' });
});

async function startServer() {
  await sequelize.authenticate();
  console.log('Database connection has been established successfully.');
  
  await sequelize.sync({ alter: true });
  
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

startServer();