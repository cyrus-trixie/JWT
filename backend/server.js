const express = require('express');
const supabase = require('./supabaseClient');

const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(express.json());

// test route
app.get('/', (req, res) => {
  res.send('Server is alive');
});

// start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});