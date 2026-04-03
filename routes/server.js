const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(require('./middleware/formatResponse'));

// Static files & API docs
app.use(express.static('public'));
app.get('/api-docs', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'docs.html'));
});

// Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/posts', require('./routes/posts'));
app.use('/api/comments', require('./routes/comments'));
app.use('/api/likes', require('./routes/likes'));
app.use('/api/followers', require('./routes/followers'));

// Base route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Social Media API' });
});

// Error handler (must be last)
app.use(require('./middleware/errorHandler'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running in development mode on port ${PORT}`);
});

process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
  process.exit(1);
});