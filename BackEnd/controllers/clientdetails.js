const { validationResult } = require('express-validator');


const Clientdetails = require('../models/clientdetails');

exports.fetchAll = async (req,res,next)=>{
try {
    const [allClient]= await Clientdetails.fetchAll();
    res.status(200).json(allClient)    
} catch (error) {
    if(!error.statusCode){
        error.statusCode =500;
    }
    next(error)
}
} 
 
exports.postClient = async (req,res,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()) return

    const clientname = req.body.clientname;
    const clientPhonenumber =req.body.clientPhonenumber;
    const address= req.body.address;
    const email = req.body.email;

    try {
        const client ={
            clientname : clientname,
            clientPhonenumber: clientPhonenumber,
            address: address,
            email: email,   
        }
        console.log(client);
        const result = await Clientdetails.save(client)
        res.status(201).json({message: 'clientdetails saved'})
    } catch (error) {
        if(!error.statusCode){
            error.statusCode =500;
        }
        next(error)
    }
}

