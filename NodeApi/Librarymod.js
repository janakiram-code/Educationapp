exp=require("Express")
ObjectId = require('mongodb').ObjectID;
router=exp.Router();
//router.use(cookieParsor());
router.post("/insertbooks",function(req,res){
    reqbody=req.body;
    console.log(reqbody)
    conn._ea_bookmaster.save(reqbody);
    res.send(['Book Inserted...'])
})
//get All Books From Database.
router.get("/getbooks",function(req,res){
    conn._ea_bookmaster.find({}).toArray(function(err,result){
        res.send(result)
    })
})
//get Last Book Id
router.get("/getlastbookid",function(req,res){
    conn._ea_bookmaster.aggregate([{"$group":{
        "_id":'',
        "max":{"$max":"$bookid"}
    }}]).toArray(function(req,result){
        res.send(result)
    })
})
module.exports=router