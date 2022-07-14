const e = require('express');
const express = require('express');

const router = express.Router();
const { Orders, Products, Checks } = require('../db/models');

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Orders.findAll({
      where: { check_id: id },
      include: {
        model: Products,
      },
    });
    // console.log(JSON.parse(JSON.stringify(order), '============================='));
    const products = order.map((el, index) => ({
      name: el.Product.name,
      price: el.Product.price,
      count: el.counter,
      img: el.Product.img,
      id: index,
    }));
    console.log(products);
    res.json(products);
  } catch (error) {
    console.log(error);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Orders.destroy({ where: { id } });
    res.json({ order });
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
