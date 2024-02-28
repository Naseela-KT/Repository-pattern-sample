const express = require('express');
const bodyParser = require('body-parser');
const dbConfig = require('./config/db.config');
const authRoutes = require('./routes/authroutes');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/auth', authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});