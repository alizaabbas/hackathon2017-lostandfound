var pg = require('pg');
var express = require('express');
var app = express();

var bodyParser =  require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine' , 'ejs');
app.set('views' , './views');
app.use(express.static('style'));
var connectionString = 'postgres://' + process.env.POSTGRES_USER + ':' + process.env.POSTGRES_PASSWORD + '@localhost/lost';
// loads test page
app.get('/test' , function(req, res){
	res.render('test');
})
app.get('/report' , function(req, res){
	res.render('report');
})

app.get('/form' , function(req, res){
	res.render('form');
})
// app.get('*' , function(req,res){
// 	res.send("The website URL is not valid!...plesae try again! againn");
// })

app.post('/form' , function(req,res){
	console.log(req);
	pg.connect(connectionString, function (err, client, done) {
		client.query(`INSERT INTO person(firstname,lastname,email,borough,city,itemdescription, phone) values ('${req.body.firstname}', '${req.body.lastname}','${req.body.email}','${req.body.burr}','${req.body.city}','${req.body.itemdesc}', '${req.body.phone}')`, function(err, result){
    res.redirect('/viewall');
    done();
    pg.end();
  })
 })
})

app.get('/viewall', function (req, res) {
	pg.connect(connectionString, function (err, client, done) {
		client.query('select * from person', function (err, result) {
			res.render('viewall', { data: result.rows });
			done();
			pg.end();
		})
	})
})

	app.listen(3000, function () {
		console.log("listening to port 3000...");
	})


