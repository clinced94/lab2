var net = require('net');

var ADDRESS = '10.62.0.46';
var PORT = 8000;
var STUDENT_ID = 13319802;


var server = net.createServer()
	


server.on('connection', function(socket) {

		console.log('Connection successful\n' + socket.remoteAddress + ':' + socket.remotePort + ' has connected');

		socket.on('data', function(data) {

			var dataStr = data.toString();
			
			if(dataStr.includes("HELO")) {

				socket.write(data 
					+ "IP:" + ADDRESS + '\n'
					+ 'PORT: ' + PORT + '\n'
					+ 'StudentID: ' + STUDENT_ID + '\n');
			}

			else if(dataStr.includes("KILL_SERVICE\n")) {

				socket.destroy();
			}

			else {

				console.log('Data: ' + data);
			}
		});

		socket.on('close', function() {

			console.log('Connection closed with ' + socket.remoteAddress + ':' + socket.remotePort);
			server.close();
		});

		socket.on('error', function(err) {

			console.log('An error has occured. \nDetails: ' + err.message);
		})

});

server.listen(PORT, function() {

	console.log('Listening to ' + server.address().address + ':' + PORT);
});