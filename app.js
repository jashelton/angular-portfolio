var app = require("./server/routes");

// Start the server
// var server = app.listen(8000, function() {
//  console.log('Listening on port %d', server.address().port);
port = process.env.PORT || 8000;

var server = app.listen(port, function() {
console.log("Listening on " + port);
});
