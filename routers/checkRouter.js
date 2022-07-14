/* eslint-disable no-unused-vars */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-undef */
const express = require('express');

const router = express.Router();
const { Checks, Orders } = require('../db/models');

router.post('/', async (req, res) => {
  try {
    console.log(req.body, '+++++++++++++++++++++++');
    const userID = req.body.body.data.userId;
    const products = req.body.body.newCheck;
    const newCheck = await Checks.create({ user_id: userID });
    for (let i = 0; i < products.length; i += 1) {
      const prodID = req.body.body.newCheck[i].data.id;
      const { count } = req.body.body.newCheck[i];

      const newOrder = await Orders.create({
        check_id: newCheck.id,
        product_id: prodID,
        counter: count,
      });
    }
    res.json({ id: newCheck.id });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
