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
    if (speech === 'Address and Location') {
        console.log("<<<<<<<<<<<< First Intent >>>>>>>>>>>>",speech)
        var nameSlot = req.body.result.parameters.name;
        console.log("nameSlot>>>>", nameSlot)
    } else {
        return res.json({
            speech: 'please, tell me the name',
            displayText: 'please, tell me the name',
            source: "webhook-google-assistant-sample"
        });
    }

    var data =
        req.body.result &&
            req.body.result.parameters &&
            req.body.result.parameters.facilities
            ? req.body.result.parameters.facilities
            : "Seems like some problem. Speak again.";
    console.log("speech>>>>>>>>>>>>>>>>>>.", data)
    return res.json({
        speech: 'please, tell me the name',
        displayText: 'please, tell me the name',
        source: "webhook-google-assistant-sample"
    });

});

// app.post("/webhook", (req, res) => {
//     var intentName = req.body.result.metadata.intentName;
//     var params = req.body.result.parameters;
//     if (intentName === 'Address and Location') {
//         console.log("ONE")
//         if (params.bar) {
//             console.log("params.bar %%%%%%", params.bar)
//             return res.json({
//                 speech: 'bar is near by 1 kilometer',
//                 displayText: 'bar is near by 1 kilometer',
//                 source: "webhook-google-assistant-sample"
//             });
//         } else if (params.facilities) {
//             console.log("params.facilities %%%%%%", params.facilities)
//             return res.json({
//                 speech: 'next street..slam gym avaliable',
//                 displayText: 'next street..slam gym avaliable',
//                 source: "webhook-google-assistant-sample"
//             });
//         } else {
//             console.log("-------Seems like some problem. Speak again-----------")
//             return res.json({
//                 speech: 'Seems like some problem. Speak again.',
//                 displayText: 'Seems like some problem. Speak again.',
//                 source: "webhook-google-assistant-sample"
//             });
//         }
//     }
//     else if (intentName === 'AGE Policy') {
//         console.log("TWO")
//         var age = req.body.result.parameters.criteria
//             ? req.body.result.parameters.criteria
//             : "Seems like some problem. Speak again.";
//         console.log("age>>>>", age)
//         return res.json({
//             speech: '18 and above',
//             displayText: '18 and above',
//             source: "webhook-google-assistant-sample"
//         });
//     }
//     else if (intentName === 'Charger') {
//         console.log("THREE")
//         var charger = req.body.result.parameters.item
//             ? req.body.result.parameters.item
//             : "Seems like some problem. Speak again.";
//         console.log("charger>>>>", charger)
//         return res.json({
//             speech: 'yup! I have',
//             displayText: 'yup! I have',
//             source: "webhook-google-assistant-sample"
//         });
//     }
//     else {
//         throw new Error('Invalid intent');
//     }
// });

app.listen(process.env.PORT || 3000, function () {
    console.log("Server up and listening........");
});