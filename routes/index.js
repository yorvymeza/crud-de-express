const express= require('express');
const router= express.Router();

const IndexControllers= require('../controllers/index');
router.get('/',IndexControllers.index);

router.get('/products',IndexControllers.ListOfProduct);

router.post('/new-product',IndexControllers.newProduct);

module.exports= router;