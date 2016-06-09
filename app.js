var express = require('express');
var bodyParser = require('body-parser');
var session = require('cookie-session');


var app = express();



app.use(session({secret: 'todolistsecret'}))

.use(function(req,res,next){
	if(typeof(req.session.todolist) == 'undefined'){
		req.session.todolist = [];
	}
	next();
})

.get('/', function(req,res){
	res.render('home.ejs', {'title': 'Todolist'});
});


app.listen(8080);


