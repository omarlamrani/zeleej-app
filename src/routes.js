const express = require("express");
const router = express.Router();
const control = require('../controllers/basicController.js');

router.get('/', control.home);

router.get('/second', control.second);

router.get('/create', control.create);

module.exports = router;
