var GLOBALS = require('../../../config/constants');
var common = require('../../../config/common');
var template = require('../../../config/template');
var headerValidator = require('../../../middleware/headerValidator');
var asyncLoop = require('node-async-loop');
var cryptoLib = require('cryptlib');
var shaKey = cryptoLib.getHashSha256(GLOBALS.KEY, 32);

var user_model = {

   
    signup: function(request, callback) {

        request.password=common.randomPasswordgenerator();
        let signupObj = {
            username:request.username,
            email:request.email,
            password:request.password
        }

        require('../../../config/template').welcome(request,function(userData){
            common.send_email("Paassword sent",request.email,userData, (isSent) => {
                if (isSent) {
                    common.singleInsert('tbl_user', signupObj, (user_id, error) => {
                        common.generateSessionCode(user_id, request, (token) => {
                            if (token == null) {
                                callback(200, '2', {keyword: 'rest_keywords_nodata', components: {}}, null);
                            } else {
                                user_model.getUserDetails({"user_id":user_id}, (statuscode, responsecode, message, userDetails) => {
                                    if (userDetails == null) {
                                        callback(200, '2', {keyword: 'rest_keywords_nodata', components: {}}, null);
                                    } else {
                                        userDetails.token = token;
                                        callback(200, '1', {keyword: 'rest_keywords_user_signup_success', components: {}}, userDetails);
                                    }
                                });
                            } 
                        });
            
                    });
                } else {
                    callback(200,'0', {keyword: 'rest_keywords_somethingwrong_sendingotp', components: {}}, null);
                }
            });
        });
      
       
    },
    complaints: function(request, callback) {
        console.log("req",request);
        // const datetime = `${request.date} ${request.time}:00`; 
        var insertObj={
            user_id: request.userId,
            subject: request.subject,
            description:request.description,
            date:request.date,
            time:request.time
        }
        common.singleInsert('tbl_complaints', insertObj, (user_id, error) => {
              console.log("user_id",user_id);
            if (!error) {
                user_model.getComplaintDetails(request,user_id,function(statuscode,code,message,compalintDetails){
                    require('../../../config/template').complaintDetails(compalintDetails,function(complaintData){
                        common.send_email("Complaint Details",`panchalrahul133@gmail.com`,complaintData, (isSent) => {
                            if (isSent) {
                                callback(200,'1', {keyword: 'insert_complaint_data_successfully', components: {}}, { compalintDetails});
                            }else {
                                callback(200,'0', {keyword: 'rest_keywords_somethingwrong_sendingotp', components: {}}, null);
                            }
                        })
                    });
                })
            } else {
                callback(200,'0', {keyword: 'insert_complaint_data_failed', components: {}}, null);
            }
        });

    },
    getComplaint: function(request,id,callback) {
        console.log("req",request)
        common.common_Multipleselect(`SELECT * FROM tbl_complaints WHERE user_id=${id} and is_active=1 and is_delete=0`, (result, error) => {
            if (!error) {
                callback(200,'1', {keyword: 'insert_complaint_data_successfully', components: {}}, {result });
            } else {
                callback(200,'0', {keyword: 'insert_complaint_data_failed', components: {}}, null);
            }
        });

    },
    getAllcomplaintDetails: function(request,callback) {
        common.common_Multipleselect(`SELECT * FROM tbl_complaints WHERE is_active=1 and is_delete=0`, (result, error) => {
            if (!error) {
                callback(200,'1', {keyword: 'insert_complaint_data_successfully', components: {}}, {result });
            } else {
                callback(200,'0', {keyword: 'insert_complaint_data_failed', components: {}}, null);
            }
        });

    },
    getComplaintDetails: function(request,user_id,callback) {
        console.log("req",request)
        common.common_Singleselect(`SELECT * FROM tbl_complaints WHERE id=${user_id} and is_active=1 and is_delete=0`, (result, error) => {
            if (!error) {
                callback(200,'1', {keyword: 'insert_complaint_data_successfully', components: {}}, result );
            } else {
                callback(200,'0', {keyword: 'insert_complaint_data_failed', components: {}}, null);
            }
        });

    },
    login: function(request, callback) {
        console.log(request)
        common.common_Singleselect(`select * from tbl_user where email='${request.email}' AND password='${request.password}' and is_active=1 and is_delete=0`, (userDetails, error) => {
            if (userDetails == undefined) {
                callback(200, '0', {keyword: 'invalid_username_password', components: {}}, null);
            } else if (userDetails != undefined && userDetails.is_active != '1') {
                callback(200, '3', {keyword: 'rest_keywords_inactive_accountby_admin', components: {}}, null);
            } else {
                    common.checkUpdateDeviceInfo(userDetails.id, userDetails.role, request, (token) => {
                        
                        if (token == null) {
                            callback(200, '2', {keyword: 'rest_keywords_nodata', components: {}}, null);
                        } else {
                            userDetails.token = token;
                            callback(200, '1', {keyword: 'rest_keywords_user_login_success', components: {}}, userDetails);
                        }
                    });
            }
        });
    },
    checkUniqueEmailMobileUsername: function (request, login_user_id, callback) {
        
        var condition;
        login_user_id != '' && login_user_id != undefined ? condition = `id != ${login_user_id} AND` : condition = '';

        common.common_Singleselect(`SELECT * FROM tbl_user WHERE ${condition} (email = '${request.email}' OR (country_code = '${request.country_code}' AND mobile_number = '${request.mobile_number}') OR (username='${request.username}')) AND is_active = '1' AND is_delete = '0'`, (userdetail) => {
            console.log(this.sql);
            if (userdetail != null) {
                callback(userdetail);
            } else {
                callback(null);
            }
        });
  
    },
    updatepassword: function (request,id, callback) {
        var updateData={
            password:request.password,
            is_updated:0
        }
        common.common_update('tbl_user',`id=${id}`,updateData, (userdetail, error) => {
            if (!error) {
                callback(200, '1', {keyword: 'reset_password_succussfully', components: {}}, {});
            } else {

                callback(200, '0', {keyword: 'rest_keywords_user_forgot_password_failed', components: {}}, null);
            }

        });
    },
    updatestatus: function (request,id, callback) {
        console.log(request,"requestss");
        var updateData={
            status:request.selectedStatus,
        }
        common.common_update('tbl_complaints',`id=${id}`,updateData, (userdetail, error) => {
            if (!error) {
                callback(200, '1', {keyword: 'update_status_succussfully', components: {}}, {});
            } else {

                callback(200, '0', {keyword: 'update_status_failed', components: {}}, null);
            }

        });
    },
    getuserdata: function (request, callback) {
        common.common_Multipleselect(`SELECT * FROM tbl_user WHERE role="User" and is_active = '1' AND is_delete = '0'`, (userDetails, error) => {
            if (userDetails == null) {
                callback(200,'2', {keyword: 'user_details_found_failed', components: {}}, null);
            } else {
                callback(200,'1', {keyword: 'user_details_found_successfully', components: {}}, userDetails);
            }
        });
    },
    getUserDetails: function(request, callback) {
        condition=``;
        if(request.user_id!="" && request.user_id!=undefined){
          condition+=` u.id=${request.user_id} `;
        }
        if(request.email!="" && request.email!=undefined){
          condition+=` u.email='${request.email}' `;
        }
        if(request.country_code!="" && request.country_code!=undefined){
          condition+=` AND u.country_code='${request.country_code}' `;
        }
        if(request.mobile_number!="" && request.mobile_number!=undefined){
          condition+=` AND u.mobile_number='${request.mobile_number}' `;
        }
        if(request.login_type!="" && request.login_type!=undefined){
          condition+=` AND u.login_type='${request.login_type}' `;
        }
        if(request.social_id!="" && request.social_id!=undefined){
          condition+=` AND u.social_id='${request.social_id}' `;
        }
        common.common_Singleselect(`SELECT u.*, IFNULL(ud.device_token,'') as device_token, IFNULL(ud.device_type,'') as device_type, IFNULL(ud.token,'') as token FROM tbl_user u LEFT JOIN tbl_user_deviceinfo ud ON u.id = ud.user_id WHERE ${condition} AND u.is_active = '1' AND u.is_delete = '0'`, (userDetails, error) => {
            if (userDetails == null) {
                callback(200,'2', {keyword: 'rest_keywords_nodata', components: {}}, null);
            } else {
                callback(200,'1', {keyword: 'rest_keywords_success', components: {}}, userDetails);
            }
        });
    },
   

}

module.exports = user_model;               