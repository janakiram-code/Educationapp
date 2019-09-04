exp=require("express")
session = require('express-session')
 cookieParser = require('cookie-parser');
router=exp.Router();
router.use(cookieParser());
router.use(session({secret: "Shh, its a secret!",resave: true,saveUninitialized:true,proxy: true}));
router.post("/met2",function(req,res){
  reqbody=req.body;
  req.session.login='Logged';
  req.session.student=reqbody['stdname'];
  //console.log(reqbody['stdname'])
  conn.student.find({ stdname: reqbody['stdname'],stdpwd:reqbody['stdpwd'] }).toArray(function(err, result)
  { 
      res.send(result)
 })
})
/// For Build the session
router.get('/getsessionlogin1', function(req, res){
  //req.session.login='Logged'
     //req.session.page_views++; 
     //console.log(req.session.login+"====="+req.session.student)
     res.send(req.session.student+"==="+req.session.login);
  
});

module.exports=router 