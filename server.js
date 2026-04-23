const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({
    message: 'GitOps Demo App',
    version: process.env.APP_VERSION || '2.0.0'
  });
});

app.listen(3000, () => console.log('Running on port 3000'));
