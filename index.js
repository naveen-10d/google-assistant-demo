const express = require("express");
const bodyParser = require("body-parser");

const app = express()

app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

app.use(bodyParser.json());

app.post("/webhook", function (req, res) {
    var speech = req.body.result.metadata.intentName
    console.log("speech>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", speech)
    return res.json({
        speech: speech,
        displayText: speech,
        source: "webhook-echo-sample"
    });
});

app.listen(process.env.PORT || 3000, function () {
    console.log("Server up and listening........");
});