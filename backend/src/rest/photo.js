var express = require('express');
var router = express.Router();
var photo = require('../service/').photo;

router.get('/', photo.list);
router.get('/:id', photo.findById);
router.get('/rating/:photo', photo.findRatingByPhoto);
router.get('/users/all',photo.getPhotosAndUsers);
router.post('/', photo.create);
router.put('/:id', photo.update);
router.delete('/:id', photo.delete);
module.exports = router;
