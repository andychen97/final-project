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

// const baseUrl = process.env.API_BASE_URL;
const token = process.env.BEARER_TOKEN;

app.get('/api/search', (req, res, next) => {
  // const queryParams = req.query;
  const myHeaders = new Headers();
  myHeaders.append('Authorization', `Bearer ${token}`);

  fetch('https://api.yelp.com/v3/businesses/search?term=pizza&location=irvine', {
    method: 'GET',
    headers: myHeaders
  })
    .then(result => res.status(200).json(result));
  // .then(data => console.log(data))
  // .catch(err => console.log('err', err));
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  process.stdout.write(`\n\napp listening on port ${process.env.PORT}\n\n`);
});
