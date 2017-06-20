let express = require('express');
let app = express();
let path = require('path');
let bodyParser = require('body-parser');
let multer = require('multer'); // v1.0.5
let upload = multer(); // for parsing multipart/form-data

// create application/json parser 
var jsonParser = bodyParser.json();
 
// create application/x-www-form-urlencoded parser 
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.listen(8080, function () {
    console.log("Running!");
});

app.post('/login', urlencodedParser, qqf);

app.get('/', zz);




function zz(req, res) {
     res.sendFile(path.join(__dirname+'/1.html'));
}

function qqf(req,res){
if (!req.body) return res.sendStatus(400)
  res.send('welcome, ' + req.body.jopa);
}