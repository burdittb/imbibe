const router = require('express').Router();

//cocktail by name: search.php?s=margarita
//cocktail by first letter: search.php?f=a
//ingredient by name: search.php?i=vodka
//random cocktail: random.php

// router.get(`${process.env.COCKTAILDB}/search.php?s=name`, (req, res, next) => {
//   try {
//     const drink = req.query.name;
//     console.log('drink: ', drink);
//   } catch (err) {
//     next(err);
//   }
// });

router.use((req, res, next) => {
  const err = new Error('API route not found!');
  err.status = 404;
  next(err);
});

module.exports = router;
