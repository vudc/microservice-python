const express= require('express');
const app = express();
app.get('/node',async(req,res)=>{
    return res.json({message:'Node'})
})
app.listen(3000,()=>{
    console.log('app node listen 3000')
})