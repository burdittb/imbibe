// const router = require('express').Router();
// const axios = require('axios');

// //cocktail by name: search.php?s=margarita
// //cocktail by first letter: search.php?f=a
// //ingredient by name: search.php?i=vodka
// //random cocktail: random.php

// router.get('/search.php?', async (req, res, next) => {
//   try {
//     const cocktailName = req.query.s;
//     const url = new URL(
//       `${process.env.COCKTAILDB}${process.env.APIKEY}/search.php?s=${cocktailName}`
//     );
//     const { data } = await axios.get(url.href);
//     console.log('fetchedDrink', data.drinks[0].strDrink);
//   } catch (err) {
//     next(err);
//   }
// });

// router.use((req, res, next) => {
//   const err = new Error('API route not found!');
//   err.status = 404;
//   next(err);
// });

// module.exports = router;
