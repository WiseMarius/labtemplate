var express = require('express');
var router = express.Router();
var status = require('../service/').status;

router.get('/', status.list);
router.get('/:id', status.findById);
router.post('/', status.create);
// router.put('/:id',status.update);
router.delete('/:id', status.delete);
module.exports = router;
