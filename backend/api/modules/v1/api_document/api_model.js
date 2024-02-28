var con = require('../../../config/database');
var GLOBALS = require('../../../config/constants');

var API = {

    /**
     * Function to get api users list
     * 04-06-2021
     * @param {Function} callback 
     */

    apiUserList: function (callback) {
        con.query(`SELECT u.*, CONCAT('` + GLOBALS.S3_BUCKET_ROOT + GLOBALS.USER_IMAGE + `',u.profile_image) as profile_image, IFNULL(ud.device_token,'') as device_token, IFNULL(ud.device_type,'') as device_type, IFNULL(ud.token,'') as token 
        FROM tbl_user u 
        LEFT JOIN tbl_user_device as ud ON u.id = ud.user_id 
        WHERE u.is_active = '1' AND u.is_deleted = '0' GROUP BY u.id`, function (err, result, fields) {
            console.log(result);
            if (!err) {
                callback(result);
            } else {
                callback(null, err);
            }
        });
    },
}

module.exports = API;