const express = require('express');

const { body } = require ('express-validator');

const clientController = require('../controllers/clientdetails');

const auth = require('../middleware/auth');

const router = express.Router();

router.get('/', auth ,clientController.fetchAll);

router.post(
    '/',
    [   auth ,
        body('clientname').trim().not().isEmpty(),
        body('clientPhonenumber').trim().not().isEmpty(),
        body('address').trim().not().isEmpty(),
        body('email').trim().not().isEmpty(),
        body('user').trim().not().isEmpty()
    ], clientController.postClient
);



module.exports = router;