const express = require('express');
const middlewares = require('../middlewares');

const router = express.Router();
router.use(express.json());

router.post('/', middlewares.addUser);
router.get('/', middlewares.listUser);
router.get('/:id', middlewares.getUser);
router.put('/:id', middlewares.updateUser);

router.use(middlewares.error);

module.exports = router;