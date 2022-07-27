require('dotenv/config');
const path = require('path');
const express = require('express');
const errorMiddleware = require('./error-middleware');

const app = express();
const publicPath = path.join(__dirname, 'public');

if (process.env.NODE_ENV === 'development') {
  app.use(require('./dev-middleware')(publicPath));
} else {
  app.use(express.static(publicPath));
}

const baseUrl = process.env.API_BASE_URL;
const token = process.env.BEARER_TOKEN;

app.use(express.json());
app.post('/api/search', (req, res, next) => {
  const { keyword, location } = req.body;
  const reqs = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  };
  fetch(`${baseUrl}/businesses/search?term=${keyword}&location=${location}`, reqs)
    .then(result => result.json())
    .then(data => res.status(200).json(data))
    .catch(err => console.error('err', err));
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  process.stdout.write(`\n\napp listening on port ${process.env.PORT}\n\n`);
});
