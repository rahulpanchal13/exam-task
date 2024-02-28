var con = require('../config/database');
var GLOBALS = require('../config/constants');
var cryptoLib = require('cryptlib');
var shaKey = cryptoLib.getHashSha256(GLOBALS.KEY, 32);
const { default: localizify } = require('localizify');
const en = require('../languages/en.js');
const ar = require('../languages/ar.js');
const { t } = require('localizify');

var bypassMethod = new Array("signup","complaints","getuserdata", "login","updatepassword", "getcomplaintData","reset_password", "getComplaint", "forgotpassword", "updatestatus", "resetpass");

var headerValidator = {

    /**
     * Function to extract the header language and set language environment
     * @param {Request Object} req 
     * @param {Response Object} res 
     * @param {Function} callback 
     */

    extractHeaderLanguage: function (req, res, callback) {

        var headerLang = (req.headers['accept-language'] != undefined && req.headers['accept-language'] != '') ? req.headers['accept-language'] : "en";

        req.lang = headerLang;
        req.language = (headerLang == 'en') ? en : ar;

        callback();

    },

    /**
     * Function to validate API key of header (Note : Header keys are encrypted)
     * @param {Request Object} req 
     * @param {Response Object} res 
     * @param {Function} callback 
     */

    validateHeaderApiKey: function (req, res, callback) {
        console.log(req.body);
        var apiBypassMethod = ["resetform", "resetpass","complaints","updatestatus"]
        var path_data = req.path.split("/");
        if (apiBypassMethod.indexOf(path_data[4]) == -1) {
            var api_key = (req.headers['api-key'] != undefined && req.headers['api-key'] != '') ? cryptoLib.decrypt(req.headers['api-key'], shaKey, GLOBALS.IV) : "";
            console.log("api_key",api_key);
            console.log("global_key",GLOBALS.API_KEY);
            if (api_key == GLOBALS.API_KEY) {
                callback();
            } else {
                headerValidator.sendresponse(req, res, 401, '-1', { keyword: 'rest_keywords_invalid_api_key', components: {} }, null);
            }
        } else {
            callback();
        }
    },

    /**
     * Function to validate the token of any user before every request
     * @param {Request Object} req 
     * @param {Response Object} res 
     * @param {Function} callback 
     */

    validateHeaderToken: function (req, res, callback) {
        var path_data = req.path.split("/");

        if (bypassMethod.indexOf(path_data[4]) === -1) {
            if (req.headers['token'] && req.headers['token'] != '') {

                var headtoken = cryptoLib.decrypt(req.headers['token'], shaKey, GLOBALS.IV).replace(/\s/g, '');

                if (headtoken !== '') {
                    con.query("SELECT * FROM tbl_user_deviceinfo WHERE token = '" + headtoken + "' ", function (err, result) {
                        if (!err && result[0] != undefined) {
                            req.login_user_id = result[0].user_id;
                            req.login_user_type = result[0].user_type;
                            req.language_select = (req.lang != undefined && req.lang != 'en') ? "_ar" : '';
                            callback();
                        } else {
                            headerValidator.sendresponse(req, res, 401, '-1', { keyword: 'rest_keywords_tokeninvalid', components: {} }, null);
                        }
                    });
                } else {
                    headerValidator.sendresponse(req, res, 401, '-1', { keyword: 'rest_keywords_tokeninvalid', components: {} }, null);
                }
            } else {
                headerValidator.sendresponse(req, res, 401, '-1', { keyword: 'rest_keywords_tokeninvalid', components: {} }, null);
            }
        } else {
            if (req.headers['token'] && req.headers['token'] != '') {

                var headtoken = cryptoLib.decrypt(req.headers['token'], shaKey, GLOBALS.IV).replace(/\s/g, '');

                if (headtoken !== '') {
                    con.query("SELECT * FROM tbl_user_deviceinfo WHERE token = ? ", [headtoken], function (err, result) {
                        if (!err && result[0] != undefined) {
                            req.login_user_id = result[0].user_id;
                            req.login_user_type = result[0].user_type;
                            callback();
                        } else {
                            callback();
                        }
                    });
                } else {
                    callback();
                }
            } else {
                callback();
            }
        }
    },

    /**
     * Function to check validation rules for all api's 
     * @param {Request Parameters} request 
     * @param {Response Object} response 
     * @param {Validattion Rules} rules 
     * @param {Messages} messages 
     * @param {Keywords} keywords 
     */
    checkValidationRules: function (request, response, rules, messages, keywords) {

        var v = require('Validator').make(request, rules, messages, keywords);
        if (v.fails()) {
            var Validator_errors = v.getErrors();
            for (var key in Validator_errors) {
                error = Validator_errors[key][0];
                break;
            }
            response_data = {
                code: '0',
                message: error
            };
            headerValidator.encryption(response_data, function (responseData) {
                response.status(200);
                response.json(responseData);
            });
            return false;
        } else {
            return true;
        }
    },

    /**
     * Function to return response for any api
     * @param {Request Object} req 
     * @param {Response Object} res 
     * @param {Status code} statuscode 
     * @param {Response code} responsecode 
     * @param {Response Msg} responsemessage 
     * @param {Response Data} responsedata 
     */

    sendresponse: function (req, res, statuscode, responsecode, responsemessage, responsedata) {

        headerValidator.getMessage(req.lang, responsemessage.keyword, responsemessage.components, function (formedmsg) {
            if (responsedata != null) {
                let response_data = { code: responsecode, message: formedmsg, data: responsedata };
                headerValidator.encryption(response_data, function (response) {
                    res.status(statuscode);
                    // res.json(response);
                    res.json(response_data);
                });
            } else {
                let response_data = { code: responsecode, message: formedmsg };
                headerValidator.encryption(response_data, function (response) {
                    res.status(statuscode);
                    // res.json(response);
                    res.json(response_data);
                });
            }
        });
    },

    /**
     * Function to decrypt the data of request body
     * 03-12-2019
     * @param {Request Body} req 
     * @param {Function} callback 
     */
    decryption: function (req, callback) {
        
        if (req.body != undefined && Object.keys(req.body).length !== 0) {
            var request = JSON.parse(cryptoLib.decrypt(req.body, shaKey, GLOBALS.IV));
            request.lang = req.lang;
            request.login_user_id = req.login_user_id;

            request.language_select = (req.lang != undefined && req.lang != 'en') ? "_ar" : '';

            callback(request);
        } else {
            callback({});
        }
    },

    /**
     * Function to encrypt the response body before sending response
     * 03-12-2019
     * @param {Response Body} req 
     * @param {Function} callback 
     */

    encryption: function (req, callback) {
        console.log(req);
        var cryptoLib = require('cryptlib');
        var shaKey = cryptoLib.getHashSha256(GLOBALS.KEY, 32);
        var response = cryptoLib.encrypt(JSON.stringify(req), shaKey, GLOBALS.IV);
        console.log(response,"res");
        callback(response);
    },

    /*
    ** Function to send users language from any place
    ** 03-09-2019
    */
    getMessage: function (requestLanguage, keywords, components, callback) {

        if (requestLanguage != 'en') {
            localizify.add('ar', ar).setLocale(requestLanguage);
        } else {
            localizify.add('en', en).setLocale(requestLanguage);
        }

        // var returnmessage = t(keywords, components);
        callback(t(keywords, components));
    },

}
module.exports = headerValidator;