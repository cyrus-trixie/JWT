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



app.post("/api/signup", async (req, res) => {
  const { email, password } = req.body;

  const result = await supabase
    .from("users")
    .insert([{ email, password }]);

  res.json(result);
});

// start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});