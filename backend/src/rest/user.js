var express = require('express');
var router = express.Router();
var user = require('../service/').user;

router.get('/', user.list);
router.get('/:id', user.findById);
router.get('/id/:username', user.findByUsername);
router.get('/username_password/:username&:password', user.findByUsernameAndPassword);
router.get('/status/:username', user.getStatusesByUsername);
router.get('/friends/:username',user.getFriends);
router.post('/', user.create);
// router.put('/:id',user.update);
router.delete('/:id', user.delete);
module.exports = router;
