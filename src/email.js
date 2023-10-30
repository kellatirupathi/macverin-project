var express = require('express');
var http = require('http');
var path = require('path');
var nodemailer = require('nodemailer');
var app = express();
var server = http.Server(app);
var port = 500;

app.set("port", port);
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, "./Contact.jsx")));
app.get('/', function (req, response) {
    response.sendFile(path.join(__dirname, "./Contact.jsx"))
})

app.post("/send", function(req, response){
var from = req.body.from;
var to = req.body.to;
var subject = req.body.subject;
var message = req.body.message;

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'kellatirupathirao049@gmail.com', // Your email id here
        pass: 'asorkvdziridppat'
    }
})

var mailOptions ={
    from: from,
    to: to,
    subject: subject,
    text: message
}

transporter.sendMail(mailOptions, function(error, info){
    if (error){
        console.log(error)
    } else{
        console.log("Email send: " + info.response)
    }
    response.redirect("/")
})

})

server.listen(port, function(){

    console.log("Starting Server on port: " + port)
})

