var net = require("net");
relay = net.createServer(function(socket) {
	socket.on('connect', function() {
		console.log('Connected');
	});
	socket.on('data', function(data) {
		data = data.toString().substring(2,data.length);
		console.log(data.toString());
		socket.write("hi");
		socket.write("\r\n");
		console.log("Wrote Hi");
	});

})
relay.listen(8080);
relay2 = net.createServer(function(socket) {
	socket.on('connect', function() {
		console.log('Connected');
	});
	socket.on('data', function(data) {
		data = data.toString().substring(2,data.length);
		console.log(data.toString());
		socket.write("hi");
		socket.write("\r\n");
		console.log("Wrote Hi");
	});

})
relay2.listen(8081);
