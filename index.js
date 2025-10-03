const express = require('express');
const app = express();

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*'); //allow all origins
	next();
});

app.get('/', (req, res) => {
  res.send('Hello world from Express');
});

app.get('/my-custom-endpoint', (req, res) => {
  res.send(`You've hit a special endpoint`);
});

app.listen(3000, () => {
  console.log('The program is waiting for messages.Server running at http://localhost:3000');
});
