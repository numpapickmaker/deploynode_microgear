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
	console.log(event);
});

microgear.connect(APPID);
