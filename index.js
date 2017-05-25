let express = require('express');
let request = require('request');
let app = express();
let port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.listen(port);

app.get('/isitforbidden', function (req, res) {
	let URL = req.param('url'); //'http://mizbalax.com/sue-facebook';
	let forbiddenURL = req.param('badURL') || 'mizbala.com';

	request(URL, function (error, response, body) {
		console.log('statusCode:', response && response.statusCode); 
		if (error) {
			res.status(500).send({ error });
		}

		let answer = findDori(body, forbiddenURL);
		res.setHeader('Content-Type', 'application/json');
		res.send(JSON.stringify({ result : answer }));
	});
});

app.get('/', function (req, res) {
	res.render('home');
});

function findDori(body, forbiddenURL) {
	const myRegexp = /<iframe.*src=["|'](.*)["|'] /gm;
	let match = myRegexp.exec(body);
	if (match && match[1] && match[1].includes(forbiddenURL) ) {
		console.log(`Got info from ${match[1]}`);
		return true;
	} else {
		return false;
	}
}