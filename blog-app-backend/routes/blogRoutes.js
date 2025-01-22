const express = require('express')
const router = express.Router();
const jwt = require('jsonwebtoken')
router.use(express.json());
router.use(express.urlencoded({extended:true}));

function verifytoken(req,res,next){
    let token = req.headers.token;
    try {
        if(!token) throw 'Unauthorized acess';
        else{
            let payload = jwt.verify(token,'blogApp');
            if(!payload) throw 'Unauthorized acess';
            next();
        }
    } catch (error) {
        console.log(error)
    }
}

const blogModel = require('../model/blogModel');

    //Read
    router.get('/',verifytoken, async (req,res) =>{
        try {
            const data = await blogModel.find()
            res.send(data);     
        } catch (error) {
            res.send("Failed to fetch data")
        }
    })
    //Create
    router.post('/addblog',verifytoken,async (req,res) =>{
        try {
            const data = new blogModel(req.body);
            await data.save();
            res.send('Blog Added successfully');
        } catch (error) {
            res.send("Failed to add data")
        }
    })
    //update
    router.put('/updateblog/:id',verifytoken, async (req,res) => {
        try {
            const updatedblog = await blogModel.findByIdAndUpdate(req.params.id,req.body);
            if(!updatedblog){
               return res.send('Blog not found')
            }
            res.send("Blog updated successfully")
        } catch (error) {
            res.send('Failed to update blog')
        }
    })
    //delete
    router.delete('/deleteblog/:id',verifytoken, async (req,res) =>{
        try {
            const deletedblog =await blogModel.findByIdAndDelete(req.params.id)
            if(!deletedblog){
                return res.send('Blog not found')
            }
            res.send('Blog deleted successfully')
        } catch (error) {
            res.send('Failed to delete Blog')
        }
    })

module.exports = router;