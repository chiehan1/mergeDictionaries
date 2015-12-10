var inputFolder = "input";

var xlsx2json = require("xlsx-to-json");
var fs = require("fs");

var createFileRoutes = function(filenames) {
	var fileroutes = [];
	for (var i = 0; i < filenames.length; i++) {
		fileroutes.push("./" + inputFolder + "/" + filenames[i]);
	}
	return fileroutes;
}

var createJsons = function(fileroutes) {
	var jsons = [123];
	for (var i = 0; i < fileroutes.length; i++) {
		xlsx2json({
			input: fileroutes[i],
			output: null
		}, function(err, json) {
			if (err) {
				console.error(err);
			} else {
				jsons.push(json);
				console.log(jsons.length); //trans to json succeed, jsons.length is 2 and 3
			}
		});
	}
	console.log(jsons); //this jsons is still [123];
}

var fileNames = fs.readdirSync(inputFolder);
var fileRoutes = createFileRoutes(fileNames);
createJsons(fileRoutes);
