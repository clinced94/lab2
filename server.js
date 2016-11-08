var net = require('net');

var ADDRESS = '10.62.0.46';
var PORT = 8000;
var STUDENT_ID = 13319802;


var server = net.createServer()
	


server.on('connection', function(socket) {

		console.log('Connection successful\n' + socket.remoteAddress + ':' + socket.remotePort + ' has connected');

		socket.on('data', function(data) {

			if(data === "KILL_SERVICE\n") {

				socket.destroy();
			}

			else {

				console.log('Received data: ' + data);
				socket.write(data
                                        + 'IP:' + ADDRESS + '\n'
                                        + 'Port:' + PORT + '\n'
                                        + 'StudentID:' + STUDENT_ID + '\n');

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

server.listen(PORT, ADDRESS, function() {

	console.log('Listening to ' + server.address().address + ':' + PORT);
});
