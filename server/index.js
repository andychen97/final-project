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
// const token = process.env.BEARER_TOKEN;

// app.get('api/search', (req, res, next) => {
//   const queryParams = req.query;
//   return fetch(`${baseUrl}/${path}/${queryParams}`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//       Origin: 'localhost',
//       withCredentials: true
//     }
//   }

// });

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  process.stdout.write(`\n\napp listening on port ${process.env.PORT}\n\n`);
});
