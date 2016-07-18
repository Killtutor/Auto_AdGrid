var express = require("express");
var app = express();
var math = require("mathjs");

app.get("/inicia", function(pide,da){

	
	da.sendFile(__dirname+"/"+"principal.html");
})


app.get("/Pig", function(pide,da){
	da.writeHead(200, {
      'Connection': 'keep-alive',
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache'
    });
	var c=0;
	var i =1;
	var j=0;
setInterval(function(){
	i= math.round(math.random(1,30));
	j= math.round(math.random(1,20));
	link= "data: http://cashpig.gy/gridlinks/view/"+i+"/"+j+"\n\n";
	console.log(j);
	console.log(link);

 	 da.write(link);
 	// if (c>50){da.end;console.log("He terminado");}
 	 //else {c++;}

}, 30000);
	
})

app.get("/Sense", function(pide,da){
	da.writeHead(200, {
      'Connection': 'keep-alive',
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache'
    });
	var c=0;
	var i =1;
	var j=0;
setInterval(function(){
	i= math.round(math.random(1,30));
	j= math.round(math.random(1,20));
	link= "data: http://www.clixsense.com/en/ClixGrid-Play_the_Game/"+i+"/"+j+"?9502209/\n\n";
	console.log(j);
	console.log(link);

 	 da.write(link);
 	// if (c>50){da.end;console.log("He terminado");}
 	//else {c++;}

}, 30000);
	
		
	
})

var server = app.listen(8080, function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log("Servidor del AdGrid, activo: http://%s:%s",host,port);

})