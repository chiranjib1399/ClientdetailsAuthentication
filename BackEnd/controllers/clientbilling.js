const { validationResult } = require('express-validator');

const Clinetbilling = require("../models/clinetbilling");

exports.fetchAll = async (req,res,next)=>{
    try {
        const [allClientbill]= await Clinetbilling.fetchAll();
        res.status(200).json(allClientbill)    
    } catch (error) {
        if(!error.statusCode){
            error.statusCode =500;
        }
        next(error)
    }
    }

    exports.postClientBill = async (req,res,next)=>{
        const errors = validationResult(req);
        if(!errors.isEmpty()) return
    
        const clientname = req.body.clientname;
        const  Totalamount=req.body.Totalamount;
        const Pending= req.body.Pending;
    
        try {
            const clientbill ={
                clientname  : clientname ,
                Totalamount : Totalamount,
                Pending: Pending,   
            }
            console.log(clientbill);
            const result = await Clinetbilling.save(clientbill)
            res.status(201).json({message: 'Details saved...'})
        } catch (error) {
            if(!error.statusCode){
                error.statusCode =500;
            }
            next(error)
        }
    }

    