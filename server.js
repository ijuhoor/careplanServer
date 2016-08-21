var express = require('express');
var app = express();

app.get('/careplan', function(req, res) 
	{	    
	    var fs = require("fs");
	    fs.readFile('store/careplan.json', (err, data) => {
		if (err) throw err;
		
		var jsonCareplan =  JSON.parse(data);
		res.setHeader('Content-Type', 'application/json');
		res.send(JSON.stringify(jsonCareplan));
		
	    });
	});

app.listen(8081, function () 
	   {
	       console.log('Server listening on port 8081');
	   });
