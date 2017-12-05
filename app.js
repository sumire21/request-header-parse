var express = require("express");
var app = express();

app.get("/whoami", function(req, res){
var osInfo = req.headers['user-agent'].match(/\((.*?)\)/);
   res.json({
       "IP Address": req.headers['x-forwarded-for'],
       "Language": req.get('Accept-Language').slice(0,5),
        "Software": osInfo[1]
   });
   
});


app.listen(process.env.PORT, process.env.IP);