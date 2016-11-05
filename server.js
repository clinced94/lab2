var net = require('net');
var server = net.createServer();


var ADDRESS = '10.62.0.46';
var PORT = 8000;
var STUDENT_ID = 13319802;



server.on('connection', function(socket) { 

		console.log('Connection successful\n CONNECTED: ' + socket.remoteAddress + ':' + socket.remotePort );

		socket.on('data', function(data) { 

			console.log('Data: ' + data);
		});

		socket.on('close', function() {

			console.log('Connection closed with ' + socket.remoteAddress + ':' + socket.remotePort);
			server.close();
		});


		
});

server.listen(PORT, ADDRESS, function() {
		console.log('listening on ' + ADDRESS + ':' + PORT);
});