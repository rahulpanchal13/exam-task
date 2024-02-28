var express = require('express');
var router = express.Router();
var middleWare = require('../../../middleware/headerValidator');
var user_model = require('../User/user_model');
var common = require('../../../config/common');



router.post('/signup', (req, res) => {
    console.log("headers", req);
    var request = req.body;
    // middleWare.decryption(req, (request) => {
    let rules = {
        username: 'required',
        email: 'required',
    }

    let messages = {
        required: req.language.required,
    }

    if (middleWare.checkValidationRules(request, res, rules, messages, {})) {
        user_model.signup(request, (statuscode, responsecode, message, data) => {
            middleWare.sendresponse(req, res, statuscode, responsecode, message, data);
        });
    }
    // });

});
router.post('/login', (req, res) => {
    var request = req.body;

    // middleWare.decryption(req, (request) => {

    let rules = {
        email: 'required',
        password: 'required',
    }

    let messages = {
        required: req.language.required,
        in: req.language.in,
        numeric: req.language.numeric
    }

    if (middleWare.checkValidationRules(request, res, rules, messages, {})) {
        user_model.login(request, (statuscode, responsecode, message, data) => {
            middleWare.sendresponse(req, res, statuscode, responsecode, message, data);
        });
    }

    // });

});
router.post('/updatepassword/:id', (req, res) => {
    var request = req.body;
    const { id } = req.params;
    // middleWare.decryption(req, (request) => {
    // let rules = {
    //     email:'required',
    //     password:'required',
    // }

    // let messages = {
    //     required: req.language.required,
    //     in: req.language.in,
    //     numeric: req.language.numeric
    // }

    // if(middleWare.checkValidationRules(request, res, rules, messages, {})) {
    user_model.updatepassword(request, id, (statuscode, responsecode, message, data) => {
        middleWare.sendresponse(req, res, statuscode, responsecode, message, data);
    });
    // }

    // });

});


router.post('/updatestatus/:id', (req, res) => {
    var request = req.body;
    const { id } = req.params;
    user_model.updatestatus(request, id, (statuscode, responsecode, message, data) => {
        middleWare.sendresponse(req, res, statuscode, responsecode, message, data);
    });

});


router.post('/complaints', (req, res) => {

    // middleWare.decryption(req, (request) => {
    var request = req.body;

    let rules = {
        subject: 'required',
        description: 'required',
        date: 'required',
        time: 'required'
    }

    let messages = {
        required: req.language.required,
        numeric: req.language.numeric
    }
    if (middleWare.checkValidationRules(request, res, rules, messages, {})) {
        user_model.complaints(request, (statuscode, responsecode, message, data) => {
            middleWare.sendresponse(req, res, statuscode, responsecode, message, data);
        });
    }

    // });

});

router.post('/getcomplaintData', (req, res) => {

    // middleWare.decryption(req, (request) => {
    var request = req.body;
    user_model.getAllcomplaintDetails(request, (statuscode, responsecode, message, data) => {
        middleWare.sendresponse(req, res, statuscode, responsecode, message, data);
    }); Indira

    // });

});
router.post('/getComplaint/:id', (req, res) => {

    // middleWare.decryption(req, (request) => {
    var request = req.body;
    const { id } = req.params;
    user_model.getComplaint(request, id, (statuscode, responsecode, message, data) => {
        middleWare.sendresponse(req, res, statuscode, responsecode, message, data);
    });

    // });

});

router.get('/getuserdata', (req, res) => {

    // middleWare.decryption(req, (request) => {
    var request = req.body;
    user_model.getuserdata(request, (statuscode, responsecode, message, data) => {
        middleWare.sendresponse(req, res, statuscode, responsecode, message, data);
    });
    // });

});

// simple





module.exports = router;