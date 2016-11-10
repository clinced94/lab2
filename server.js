var net = require('net');

var ADDRESS = '10.62.0.46';
var STUDENT_ID = 13319802;
var PORT;
if(process.argv[2]) {
	PORT = process.argv[2];
}
else {
	console.log("No port entered ... using default port 8000");
	PORT = 8000;
}


var server = net.createServer()
	


server.on('connection', function(socket) {

		var socketAddress = socket.remoteAddress + ":" + socket.remotePort;
		console.log('Connection successful\n' + socketAddress + " has connected");

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

				socket.end();

			}
		});

		socket.on('close', function() {

			console.log('Connection closed with ' + socketAddress);
			server.close();
		});

		socket.on('error', function(err) {

			console.log('An error has occured. \nDetails: ' + err.message);
		})

});


server.on("close", function() {
	console.log("Server is now closed");
});

server.on("error", function(err) {
	console.log("Error occurred\n Details: " + err.message);
});

server.listen(PORT, ADDRESS, function() {

	console.log('Listening to ' + server.address().address + ':' + PORT);
});
