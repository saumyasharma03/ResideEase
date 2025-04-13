const express=require('express')
const router=express.Router()
const Booking = require("../Models/Bookings");
const User=require("../Models/User");
const fetchUser = require('../Middlewares/fetchUser');
const cors = require('cors');

router.post('/add',async(req,res)=>{
    try{
        const obj=req.body;
        const userId=await User.findOne({email:obj.contactInfo.email})
        obj.userId=userId._id
        const booking=await Booking.create(obj)
        res.json(booking)
        
    }
    catch(error)
    {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
    
})
router.delete('/cancel',fetchUser,async(req,res)=>{
    try{
        let id=req.body.id;
        // console.log(id);
        const response =await Booking.deleteOne({_id:id})
        res.json({message:"Booking successfully cancelled"})
    }
    catch(error)
    {
        res.status(500).json({ message: "Could not cancel the booking", error: error.message });
    }
    
})
router.get('/fetch',async(req,res)=>{
    try{
    const bookings=await Booking.find()
    res.json(bookings)
}
    catch(error)
    {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
})
router.get('/fetchById',fetchUser,async(req,res)=>{
    try{
    const bookings=await Booking.find({userId:req.userId})
    res.json(bookings)
}
    catch(error)
    {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
})
module.exports=router