const express = require('express');

const Clinetbillcontroller = require('../controllers/clientbilling');

const { body } = require ('express-validator');

const auth = require('../middleware/auth');

const router = express.Router();

router.get('/',  auth,Clinetbillcontroller.fetchAll);

router.post('/', [   auth ,
    body('clientname').trim().not().isEmpty(),
    body('Totalamount').trim().not().isEmpty(),
    body('Pending').trim().not().isEmpty()
],Clinetbillcontroller.postClientBill)




module.exports = router;