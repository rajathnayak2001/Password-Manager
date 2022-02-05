var express = require('express');
var app = express();
var bodyParser=require('body-parser');
app.set('view engine','ejs');
var controller=require('./controllers/password-controller');
var router=express.Router();
app.use(express.static(__dirname+'./public/assets'));


controller(app);
app.listen(3000);

router.get('/',(req,res)=>{
    res.sendFile(__dirname+'/views/set.ejs');
})
console.log('listening to port 3000');