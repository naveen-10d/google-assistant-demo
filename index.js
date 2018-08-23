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

    var intentName = req.body.result.metadata.intentName;
    var params = req.body.result.parameters;

    if (intentName === 'Address and Location') {
        console.log("ONE")
        if (params.bar) {
            console.log("params.bar%%%%%%", params.bar)
            return res.json({
                speech: 'bar is near by 1 kilometer',
                displayText: 'bar is near by 1 kilometer',
                source: "webhook-google-assistant-sample"
            });
        } else if (params.facilities) {
            console.log("params.facilities%%%%%%", params.facilities)
            return res.json({
                speech: 'near by ..slam gym avaliable',
                displayText: 'next by ...slam gym avaliable',
                source: "webhook-google-assistant-sample"
            });
        } else if (params.address) {
            console.log("params.address%%%%%%", params.address)
            return res.json({
                speech: 'its in feathers hotel...near by 2kilometer',
                displayText: '',
                source: "webhook-google-assistant-sample"
            });
        } else {
            console.log("-------Seems like some problem. Speak again-----------")
            return res.json({
                speech: 'Seems like some problem. Speak again.',
                displayText: 'Seems like some problem. Speak again.',
                source: "webhook-google-assistant-sample"
            });
        }
    }
    else if (intentName === 'AGE Policy') {
        console.log("TWO")
        if (params.criteria || params.common - entities) {
            console.log("params.criteria%%%%%%", params.criteria)
            return res.json({
                speech: '18 and above',
                displayText: '18 and above',
                source: "webhook-google-assistant-sample"
            });
        }
    }
    else if (intentName === 'Charger') {
        console.log("THREE")
        if (params.item || params.device) {
            console.log("params.device%%%%%%", params.device)
            return res.json({
                speech: 'yup! I have',
                displayText: 'yup! I have',
                source: "webhook-google-assistant-sample"
            });
        }
    } else if (intentName === 'Charges?') {
        console.log("FOUR")
        if (params.chargeType) {
            console.log("params.chargeType%%%%%%", params.chargeType)
            return res.json({
                speech: '30 dollars',
                displayText: '30 dollars',
                source: "webhook-google-assistant-sample"
            });
        }
    } else if (intentName === 'Count of facilities') {
        console.log("FIVE")
        if (params.count) {
            console.log("params.count%%%%%%", params.count)
            return res.json({
                speech: '20',
                displayText: '20',
                source: "webhook-google-assistant-sample"
            });
        }
    } else if (intentName === 'Events') {
        console.log("SIX")
        if (params.eventType) {
            console.log("params.eventType%%%%%%", params.eventType)
            return res.json({
                speech: 'party event, birthday celebration, musical event',
                displayText: 'party event, birthday celebration, musical event',
                source: "webhook-google-assistant-sample"
            });
        }
    } else if (intentName === 'Reservation') {
        console.log("SEVEN")
        if (params.reservationDate) {
            console.log("params.reservationDate%%%%%%", params.reservationDate)
            return res.json({
                speech: 'sure...send your details',
                displayText: 'sure...send your details',
                source: "webhook-google-assistant-sample"
            });
        }
    } else if (intentName === 'Rate Service') {
        console.log("EIGHT")
        if (params.rating) {
            console.log("params.rating%%%%%%", params.rating)
            return res.json({
                speech: 'Yes.. Please send your feedack and queries',
                displayText: 'Yes.. Please send your feedack and queries',
                source: "webhook-google-assistant-sample"
            });
        }
    } else if (intentName === 'Pet policy') {
        console.log("NINE")
        if (params.pets) {
            console.log("params.pets%%%%%%", params.pets)
            return res.json({
                speech: 'Yes.. We allow pets',
                displayText: 'Yes.. We allow pets',
                source: "webhook-google-assistant-sample"
            });
        }
    } else if (intentName === 'RESTART') {
        console.log("TEN")
        if (params.Proximity) {
            console.log("params.Proximity%%%%%%", params.Proximity)
            return res.json({
                speech: 'your request has been loading...',
                displayText: 'your request has been loading...',
                source: "webhook-google-assistant-sample"
            });
        }
    }else {
        throw new Error('Invalid intent');
    }
});

app.listen(process.env.PORT || 3000, function () {
    console.log("Server up and listening........");
});