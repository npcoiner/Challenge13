const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: [{
      model: Product
    }],
  })
  .then((data) => {
    res.status(200).json(data);
  })
  .catch((err) => {
    res.status(400).json(err);
  })
})


router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findByPk(req.params.id, {
    include: [{
      model: Product
    }],
  })
  .then((data) => {
    if(data){
      res.status(200).json(data);
    }
    else{
      res.status(404).json(" :( ");
      return;
    }
  })
  .catch((err) => {
    res.status(400).json(err);
  })
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
  .then((data) => {
    res.status(200).json(data);
  })
  .catch((err) => {
    res.status(400).json(err);
  })
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  .then((data) => {
    res.status(200).json(data);
  })
  .catch((err) => {
    res.status(400).json(err);
  })
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value

});

module.exports = router;
