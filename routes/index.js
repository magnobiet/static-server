'use strict';

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {

	res.render('index', {
		title: 'Express Static Server'
	});

});

module.exports = router;
