import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { faker } from '@faker-js/faker';

const app = express();
const PORT = 3000;
const JWT_SECRET = 'my_super_secret_key';

// ========== MOCK DATA ==========
let users = [
  { id: 1, username: 'AdminBoss', email: 'admin@example.com', password: '', role: 'admin' },
  { id: 2, username: 'Mike', email: 'mike@example.com', password: '', role: 'user' },
  { id: 3, username: 'Sara', email: 'sara@example.com', password: '', role: 'user' },
  { id: 4, username: faker.person.firstName(), email: faker.internet.email(), password: '', role: 'user' },
  { id: 5, username: faker.person.firstName(), email: faker.internet.email(), password: '', role: 'user' },
  { id: 6, username: faker.person.firstName(), email: faker.internet.email(), password: '', role: 'user' },
  { id: 7, username: faker.person.firstName(), email: faker.internet.email(), password: '', role: 'user' },
  { id: 8, username: faker.person.firstName(), email: faker.internet.email(), password: '', role: 'user' },
  { id: 9, username: faker.person.firstName(), email: faker.internet.email(), password: '', role: 'user' },
  { id: 10, username: faker.person.firstName(), email: faker.internet.email(), password: '', role: 'user' }
];

const initializeUsers = async () => {
  for (let user of users) {
    user.password = await bcrypt.hash('password123', 10);
  }
};

// ========== MIDDLEWARES ==========
app.use(express.json());

const authenticateJWT = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  !token
    ? res.status(401).json({ message: 'Authentication required.' })
    : jwt.verify(token, JWT_SECRET, (err, user) =>
        err ? res.status(403).json({ message: 'Invalid token.' }) : (req.user = user, next())
      );
};

const authorizeRole = (role) => (req, res, next) =>
  req.user.role !== role
    ? res.status(403).json({ message: 'Access denied.' })
    : next();

// ========== ROUTES ==========
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email);
  !user
    ? res.status(400).json({ message: 'User not found.' })
    : await bcrypt.compare(password, user.password)
    ? res.json({
        token: jwt.sign(
          { id: user.id, username: user.username, email: user.email, role: user.role },
          JWT_SECRET,
          { expiresIn: '1h' }
        ),
      })
    : res.status(401).json({ message: 'Invalid credentials.' });
});

// TASK 1: UPDATE EMAIL
app.put('/update-email', authenticateJWT, (req, res) => {
  const { newEmail } = req.body;
  const user = users.find((u) => u.id === req.user.id);
  !user
    ? res.status(404).json({ message: 'User not found.' })
    : (user.email = newEmail, res.json({ message: 'Email updated!', user }));
});

// TASK 2: DELETE ACCOUNT
app.delete('/delete-account', authenticateJWT, (req, res) => {
  const oldLen = users.length;
  users = users.filter((u) => u.id !== req.user.id);
  users.length === oldLen
    ? res.status(404).json({ message: 'User not found.' })
    : res.json({ message: 'Account deleted successfully.' });
});

// TASK 3: UPDATE ROLE
app.put('/update-role', authenticateJWT, authorizeRole('admin'), (req, res) => {
  const { id, newRole } = req.body;
  const user = users.find((u) => u.id === id);
  !user
    ? res.status(404).json({ message: 'User not found.' })
    : (user.role = newRole, res.json({ message: 'User role updated!', user }));
});

// TASK 4: REFRESH TOKEN
app.post('/refresh-token', authenticateJWT, (req, res) => {
  const { id, username, email, role } = req.user;
  const token = jwt.sign({ id, username, email, role }, JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
});

// SERVER START
app.listen(PORT, async () => {
  await initializeUsers();
  console.log(`Server is live on port ${PORT} `);
});
