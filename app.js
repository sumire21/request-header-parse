var express = require("express");
var app = express();
var os = require('os');


app.get("/whoami", function(req, res){
  // console.log(os.networkInterfaces().eth0[0].address);

   res.json({
       "IP Address": req.ip,
       "Language": req.get('Accept-Language').slice(0,5),
       "Software": os.type()+" "+os.release()
   });
   
});


app.listen(process.env.PORT, process.env.IP);