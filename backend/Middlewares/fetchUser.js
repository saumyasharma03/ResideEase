var jwt=require('jsonwebtoken')
const JWT_SECRET="secret-123"
const fetchUser=(req,res,next)=>{
    const authToken = req.headers['token']
    if(!authToken)
    {
        return res.status(500).send({error:"Access Denied"});
    }
    try {
        const data=jwt.verify(authToken,JWT_SECRET)
        req.userId=data.userId
        next();
    } catch (error) {
        res.status(500).send({error:"Could not fetch user"});
    }
   
}
module.exports=fetchUser