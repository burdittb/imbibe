// const express = require('express');
// const path = require('path');
// const volleyball = require('volleyball');

// const app = express();
// const port = process.env.PORT || 5000;

// if (process.env.NODE_ENV !== 'production') require('../secrets');

// // logging middleware
// app.use(volleyball.custom({ debug: true }));

// // body parsing middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // static middleware
// app.use(express.static(path.join(__dirname, '../public')));

// app.use('/api', require('./api')); // include routes

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../public/index.html'));
// }); // Send index.html for any other requests

// // error handling middleware
// app.use((err, req, res, next) => {
//   if (process.env.NODE_ENV !== 'test') console.error(err.stack);
//   res.status(err.status || 500).send(err.message || 'Internal server error');
// });

// app.listen(port, () => console.log(`Listening on port ${port}`));

// module.exports = app;
