//basic imports
var express = require ('express');
var bodyParser = require ('body-parser');
var cors = require ('cors');

//instance of express, bodyparser and cors for the app
var app= module.exports=express();

app.use(bodyParser.json());
app.use(cors());

app.use(express.static(__dirname));

var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [ 
      "CS", 
      "8T", 
      "LP" ],
    "gold": true
  },
  {
    "artist": "Nisha Gem",
    "title": "Gemmy Man",
    "release_year": 1973,
    "formats": [ 
      "CS", 
      "8T", 
      "LP" ],
    "gold": true
  }
  // Add record here
];


app.get('/dateValues', function(req,res){
	console.log('next is success in screen');
	res.send('Success');
});



app.get('/dateValues/:dateVal', function(req,res,next){
	console.log('calling get');
	console.log(myMusic);
	var dateVal=req.params.dateVal;
	var normalDate = new Date();
	var unixDate = new Date();
	if (isNaN (dateVal)){
		normalDate=dateVal;
		unixDate= "unix"; //new Date(dateVal).getTime/1000;
	}
	else {
		unixDate=dateVal;
		normalDate= "normal";//new Date(dateVal).getTime*1000;
	}
	//res.json({unix:unixDate, naturalDate: normalDate});
	
	console.log(dateVal);
res.send({myMusic: myMusic});
	
	
});



app.listen(3000,function(){
	console.log('3000 is listening');
});