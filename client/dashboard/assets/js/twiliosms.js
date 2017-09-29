// Twilio Credentials 
var accountSid = 'ACca5b7d9accca612e21697fde01d221a8'; 
var authToken = '1aaa373ba0aacedca82d4d67571b7b0c'; 

//For future= > Move to ENV Variables for security

//require the Twilio module and create a REST client 
var client = require('twilio')(process.env.TWILIO_ACCOUNTSID || accountSid, process.env.TWILIO_AUTHTOKEN || authToken); 

console.log(process.env.TWILIO_AUTHTOKEN, process.env.TWILIO_ACCOUNTSID)

function sms(to, msg){
client.messages.create({ 
    to: to, 
    from: "+18582391142", 
    body: msg, 
}, function(err, message) { 
    console.log(message); 
});
};

module.exports = sms;