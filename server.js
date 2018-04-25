var request = require('request');
var http = require('http'); 

 http.createServer(function (req, res) {
   // write the code here if it needs to execute every time
   res.writeHead(200, {'Content-Type': 'text/plain'});
   res.end("this is a test page");
 }).listen(process.env.PORT || 8080,() =>console.log('ok'));


var MicroGear = require('microgear');

  const APPID     = "disconnecttest";
  const KEY    = "dSWLQYU2ifZhWhb";
  const SECRET = "7Cdz1i7uEcwcLWeBEbkElTqNH";
  const ALIAS = "DigitalOUTPUT_HTML_web"; 

var microgear = MicroGear.create({
    key : KEY,
    secret : SECRET,
    alias : ALIAS     
});

microgear.on('connected', function() {
    console.log('Connected...');
    // microgear.setAlias("mygear");
    // setInterval(function() {
    //     microgear.chat('mygear', 'Hello world.');
    // },1000);
});

microgear.on('message', function(topic,body) {
    console.log('incoming : '+topic+' : '+body);
});

microgear.on('closed', function() {
    console.log('Closed...');
});

microgear.on("present", function(event) {
  var obj = event
  console.log(obj);
  var data = JSON.stringify({"name": obj.alias, "status": obj.type});
  //console.log(data);
});

microgear.connect(APPID);


var options = {
  hostname: 'www.postcatcher.in',
  port: 80,
  path: '/catchers/544b09b4599c1d0200000289',
  method: 'POST',
  headers: {
      'Content-Type': 'application/json',
  }
};
var req = http.request(options, function(res) {
  console.log('Status: ' + res.statusCode);
  console.log('Headers: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', function (body) {
    console.log('Body: ' + body);
  });
});
req.on('error', function(e) {
  console.log('problem with request: ' + e.message);
});
// write data to request body
req.write('{"check": "Hello, World"}');
req.end();
