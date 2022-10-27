const express = require('express');

const partnerController = require('../controllers/marktingpartners');

const { body } = require ('express-validator');

const auth = require('../middleware/auth');

const router = express.Router();


router.get('/',  auth,partnerController.fetchAll);
router.post('/',[   auth ,
    body('companyname').trim().not().isEmpty(),
    body('tenure').trim().not().isEmpty(),
    body('sponsorship').trim().not().isEmpty(),
    body('email').trim().not().isEmpty()
], partnerController.postMarketingPartners);

module.exports = router;