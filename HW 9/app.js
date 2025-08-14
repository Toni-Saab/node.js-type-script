import express from 'express';
import 'dotenv/config';
import sequelize from './config/db.js';
import User from './models/user.js';
import bcrypt from 'bcrypt';
import { mustChangePasswordMiddleware } from './middleware/auth.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());


app.post('/register', async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(409).json({ message: 'Email is already registered.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      email,
      password: hashedPassword,
    });

    res.status(201).json({ message: 'User registered successfully!', user: newUser });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong.', error: error.message });
  }
});


app.post('/change-password', async (req, res) => {
  const { userId, newPassword } = req.body;

  try {
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    await user.update({
      password: hashedPassword,
      mustChangePassword: false,
    });

    res.status(200).json({ message: 'Password changed successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong.', error: error.message });
  }
});


app.get('/protected-route/:userId', mustChangePasswordMiddleware, (req, res) => {
  res.status(200).json({ message: `Welcome, user ${req.user.email}!` });
});

async function startServer() {
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
    
    await sequelize.sync({ alter: true });
    
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

startServer();