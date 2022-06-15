const express = require('express');

const router = express.Router();
const personController = require('../controllers/person');

router.get('/', personController.getMany);
router.get('/person/:id', personController.getOne);



module.exports = router;