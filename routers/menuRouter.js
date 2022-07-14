const express = require('express');

const router = express.Router();
const { Categories, Products } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const products = await Categories.findAll();
    res.json(products);
  } catch (error) {
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    console.log('=======================>>>>>.', req.params)
    console.log(req.session);
    const products = await Products.findAll(
      { where: { categ_id: id } },
    );
    res.json(products);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
