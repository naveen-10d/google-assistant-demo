const express = require("express");
const bodyParser = require("body-parser");

const app = express()

app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

app.use(bodyParser.json());

app.post("/webhook", (req, res) => {
    console.log("-------webhook activated---------")
    var speech = req.body.result.metadata.intentName;
    if(speech === 'Address and Location'){
        console.log("<<<<<<<<<<<< First Intent >>>>>>>>>>>>")
        var nameSlot = req.body.result.parameters.name;
      console.log("nameSlot>>>>",nameSlot)
    }
    return res.json({
        speech: 'please, tell me the name',
        displayText: 'please, tell me the name',
        source: "webhook-google-assistant-sample"
    });
});

app.listen(process.env.PORT || 3000, function () {
    console.log("Server up and listening........");
});