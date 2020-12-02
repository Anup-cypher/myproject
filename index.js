// //use of view engine

// const webRoutes = require('./routes/web.js');
// app.set('view engine', 'ejs');


// app.use('/', webRoutes);

const http = require('http');
let port = 8000;

//create new server
let server = http.createServer((req, res) =>{
	//handle the response

	if(req.url == '/'){
		res.writeHead(200, {'content-type': 'text/html'});
		res.write('<html><head> </head><body> <h1>Hello IIMS </h1> <p> This is our first pargraph.</p></body></html>');
		res.end();
	}else if(req.url === '/profile'){
		res.writeHead(200, {'content-type': 'text/html'});
		res.write('<html><head> </head><body> <h1>Hello guys ... </h1> <p> This is our profile page.</p></body></html>');
		res.end();

	}
	else{
		res.writeHead(404, {'content-type' : 'text/html'});
		res.write('<html><head> </head><body> <h1> 404 Page not found </h1></body></html>');
		
		res.end();
	}
})

//listen server to port
server.listen(port);
console.log('server is running on port: ', port);