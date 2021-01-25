var express = require('express');
var router = express.Router();
const userService = require('../controllers/userService')

router.get('/:name',userService.userValidate)

module.exports = router;
