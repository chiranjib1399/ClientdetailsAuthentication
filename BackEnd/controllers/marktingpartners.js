const { validationResult } = require('express-validator');

const Marketingpartner = require('../models/marketingpaertner');

exports.fetchAll = async (req,res,next)=>{
    try {
        const [allMarketingPartner]= await Marketingpartner.fetchAll();
        res.status(200).json(allMarketingPartner)    
    } catch (error) {
        if(!error.statusCode){
            error.statusCode =500;
        }
        next(error)
    }
    }

    
exports.postMarketingPartners = async (req,res,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()) return

    const companyname = req.body.companyname;
    const tenure =req.body.tenure;
    const sponsorship= req.body.sponsorship;
    const email = req.body.email;

    try {
        const marketingpartner ={
            companyname  : companyname ,
            tenure: tenure,
            sponsorship: sponsorship,
            email: email,   
        }
        console.log(marketingpartner);
        const result = await Marketingpartner.save(marketingpartner)
        res.status(201).json({message: 'Details saved...'})
    } catch (error) {
        if(!error.statusCode){
            error.statusCode =500;
        }
        next(error)
    }
}
     