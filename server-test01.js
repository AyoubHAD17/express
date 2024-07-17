const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Fuck, World!');
});

// Define a port or use the one provided by Vercel
const port = process.env.PORT || 3000;

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
