const express = require('express');

const router = express.Router();
const upload = require('../middlewares/multer');
const { Products } = require('../db/models');

router.post('/', upload.single('myFile'), async (req, res) => {
  console.log(req.body, '<<<<<<<<<<<<');
  try {
    const post = await Products.create(
      {
        name: req.body.name,
        price: req.body.price,
        categ_id: req.body.category,
        img: req.file.path.replace('public', ''),
      },
    );
    res.status(202).json({ post });
  } catch (error) {
    console.log(error);
  }
  console.log(req, '==========');
});

module.exports = router;
