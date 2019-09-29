exp=require("express")
 session = require('express-session') 
 cookieParser = require('cookie-parser');
  nodemailer = require('nodemailer');
   ObjectId = require('mongodb').ObjectID;
  const url = require('url');
  const querystring = require('querystring');
  //console.log(url,"url.........")
router=exp.Router();
router.use(cookieParser());
router.use(session({secret: "Shh, its a secret!",resave: true,saveUninitialized:true,proxy: true}));
router.post("/regstd",function(req,res){
    reqbody=req.body
    conn.student.save(reqbody)
    res.send(['Inserted Successfully'])
});
//create attandance......
router.post("/createattandance",function(req,res){
    reqbody=req.body
    var arr='';
    conn.student.find({stdclass:reqbody['stdcls']}).toArray(function(err,result)
    { 
      var len=result.length
      for(let i=0;i<len;i++){
      stdnaame=result[i].stdname
      let ob={stdname:stdnaame,stdclass:reqbody['stdcls'],yymm:reqbody['yymm']}
      conn.studentattandance.save(ob)
      }
      res.send('Attandance Created.....')
    })
});
router.post("/savefields",function(req,res){
  reqbody=req.body 
  //console.log(reqbody)
  //let ob={stdname:stdnaame,stdclass:reqbody['stdcls'],yymm:reqbody['yymm']}
  conn.pagefilelds.save(reqbody)
  res.send('Fields Created.....')
})
router.get('/getsessionlogin', function(req, res){
    req.session.login='Logged'
       //req.session.page_views++; 
       res.send(req.session.login);
 });
  //Getting student Attandance..............
 router.post('/gettattandance', function(req, res){
    reqbody=req.body
    conn.studentattandance.find({stdclass:reqbody['stdclass'],yymm:reqbody['yymm']}).toArray(function(err,result){
    //console.log(reqbody['yymm']+reqbody['stdclass'])
      res.send(result);
    })
    
 });
 //Update Student Attandance.............
 router.post("/updateAttandance",function(req,res){
   reqbody=req.body;   
   var arr=(Object.getOwnPropertyNames(reqbody[0]));
     var len=reqbody.length
    for(let i=0;i<len;i++){ 
      conn.studentattandance.update({[arr[0]] : ObjectId(reqbody[i][arr[0]])}, 
        {"$set": {[arr[1]]:reqbody[i][arr[1]]}},
        function(err,data) {  
        if (err) {  
        res.send(err)         
        }  
          else{        
          if(i==(len-1)) res.send("updated All............."); 
          }  
      }); 
    }
  })
 //getLast Registre No........
 router.get('/lastregno',function(req,res){ 
     conn.student.aggregate([{ "$group": { 
      "_id": null,
      "max": { "$max": "$stdregno" } 
  }}]).toArray(function(err, result)
     { 
         res.send(result)
    })
 })
 //getstudents...
 //for multiple params use like below
 //'/getstd/:id/:data'
 router.get('/getstd/:id',function(req,res){
   //var ids = req.params.id;
   //var data = req.params.data;
   conn.student.find({"stdregno":new RegExp(req.params.id)}).toArray(function(err,result){
     res.send(result)
   })
 })
 //sending Mail...............
 router.get("/sendmails",function(req,res){
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        secure: true,
        auth: {
          user: 'ramece1992@gmail.com',
          pass: '8500947944'
        },
        tls: {
          rejectUnauthorized: false
      }
      });
      
      var mailOptions = {
        from: 'aaaaaaaaaaa@gmail.com',
        to: 'janakiram.deverla@gmail.com',
        subject: 'Sending Email using Node.js',
        text: 'That was easy!',
        html:"<h1 style='color:red'>hiall</h1>"
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          //console.log('Email sent: ' + info.response);
        }
      });
    res.send("Mail Sent...")
  })
  //getStudentDataa............
  router.get("/getstudent",function(req,res){
    conn.student.find({}).toArray(function(err,result)
    {
      res.send(result)
    })
  })
router.get("/getfields",function(req,res){
conn.collection('pagefilelds').aggregate(
  [{
  $lookup:
  {
        from: 'pagehead',
        localField: 'pgname',
        foreignField: 'pgid',
        as: 'orderdetails'
  }
}]).toArray(function(err,result)
{
  res.send(result)
})
})
//Insert Lookups
router.post("/inslooktype",function(req,res){
  reqbody=req.body
  conn._ea_lookups.save(reqbody)
  res.send(['Look Types Created....'])
})
//get Looktype
router.get("/getlooktypes",function(req,res){
  conn._ea_lookups.find({looktype:"looktype"},{lookcode:1,_id:0}).toArray(function(req,result){
    res.send(result)
  })
})
//check validation of duplicate
router.post("/getlooktype1",function(req,res){
  reqbody=req.body;
  //console.log(reqbody.one)
  conn._ea_lookups.find({lookcode:reqbody.one},{_id:0,lookcode:0}).toArray(function(request,responce){
    res.send(JSON.stringify(responce))
  })
})
module.exports=router

