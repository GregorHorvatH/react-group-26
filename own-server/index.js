const express = require('express');
const app = express();
const PORT = 4040;

const users = [
  { id: 1, name: 'bobby' },
  { id: 2, name: 'peter' },
];

app.get('/', (req, resp) => {
  resp.send('<h1>Hello world</h1>');
});

app.get('/users', (req, resp) => {
  resp.json(users);
});

app.post('/users', (req, resp) => {
  users.push({ name: 'new user' });

  resp.json(users);
});

app.get('*', (req, resp) => {
  resp.send('404');
});

app.listen(PORT, () => console.log('The server is listening on port', PORT));
