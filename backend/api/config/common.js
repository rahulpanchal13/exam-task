var con = require("./database");
var GLOBALS = require("./constants");
var date_time = require("node-datetime");

var Validate = {
  generateSessionCode: function (user_id, request, callback) {

    console.log(request);
    var randtoken = require("rand-token").generator();
    var usersession = randtoken.generate(64,"0123456789abcdefghijklnmopqrstuvwxyz");

    Validate.checkDeviceInfo(user_id, request.role, function (DeviceInfo, Error) {
        if (DeviceInfo != null) {
          var params = {
            token: usersession,
            device_type: request.device_type != undefined ? request.device_type : "A",
            device_token: request.device_token != undefined ? request.device_token : "20sdfds0",
          };
          Validate.updateDeviceInfo(user_id, request.role, params, function () {
            callback(usersession);
          });
        } else {
          console.log(request);
          console.log("req");
          var params = {
            role: request.role,
            user_id: user_id,
            token: usersession,
            device_name: request.device_name != undefined ? request.device_name : "",
            model_name: request.model_name != undefined ? request.model_name : "",
            os_version: request.os_version != undefined ? request.os_version : "",
            ip: request.ip != undefined ? request.ip : "",
            uuid: request.uuid != undefined ? request.uuid : "",
            device_type: request.device_type != undefined ? request.device_type : "A",
            device_token: request.device_token != undefined ? request.device_token : "20sdfds0",
          };
          Validate.addDeviceInformation(params, function (data) {
            callback(usersession);
          });
        }
      }
    );
  },

  checkDeviceInfo: function (user_id, user_type, callback) {
    con.query("SELECT * FROM tbl_user_deviceinfo WHERE user_id = '" + user_id + "' AND role='" + user_type + "' ", function (err, result) {
        if (!err && result[0] != undefined) {
          callback(result[0]);
        } else {
          callback(null, err);
        }
      }
    );
  },

  updateDeviceInfo: function (user_id, user_type, params, callback) {
    con.query("UPDATE tbl_user_deviceinfo SET ? WHERE user_id = '" + user_id + "' AND role='" + user_type + "' ", params, function (err, result, fields) {
        callback(result);
    });
  },

  addDeviceInformation: function (params, callback) {
    console.log("params",params);
    con.query("INSERT INTO tbl_user_deviceinfo SET ?", params, function (err, result, fields) {
    console.log("params",err);

        callback(result);
    });
  },

  checkUpdateDeviceInfo: function (user_id, user_type, request, callback) {

    var randtoken = require("rand-token").generator();
    var usersession = randtoken.generate(64, "0123456789abcdefghijklnmopqrstuvwxyz");

    var upd_device = {
      uuid: request.uuid != undefined ? request.uuid : "",
      ip: request.ip != undefined ? request.ip : "",
      token: usersession,
      device_name: request.device_name != undefined ? request.device_name : "",
      model_name: request.model_name != undefined ? request.model_name : "",
      os_version: request.os_version != undefined ? request.os_version : "",
      device_type: request.device_type != undefined ? request.device_type : "A",
      device_token: request.device_token != undefined ? request.device_token : "0",
    };

    Validate.checkDeviceInfo(user_id, user_type, function (DeviceInfo, Error) {
      if (DeviceInfo != null) {
          Validate.updateDeviceInfo(user_id, user_type, upd_device, function (result, error) {
              callback(usersession);
          });
      } else {
          upd_device.user_id = user_id;
          upd_device.role = user_type;
          Validate.addDeviceInformation(upd_device, function (result) {
            callback(usersession);
          });
      }
    });
  },

  sendSMS: function (phone, message, callback) {
    if (phone != "" && phone != undefined) {
      callback(true);
    } else {
      callback(false);
    }
  },

  // sendSMS: function (phone, message, callback) {
  //     // callback(true); return

  //     if (phone != '' && phone != undefined) {
  //         const client = require('twilio')(GLOBALS.TWILLIO_ACCOUNT_SID, GLOBALS.TWILLIO_ACCOUNT_AUTH);
  //         client.messages
  //             .create({
  //                 body: message,
  //                 from: GLOBALS.TWILLIO_ACCOUNT_PHONE,
  //                 to: phone
  //             })
  //             .then((message) => {
  //                 console.log(message);
  //                 callback(true);
  //             })
  //             .catch((e) => {
  //                 console.log(e);
  //                 callback(false);
  //             });
  //     } else {
  //         callback(true);
  //     }
  // },

  /**
   * Function to generate random otp
   * 12-08-2022
   */
  randomOTPgenerator: function () {
    var seq = (Math.floor(Math.random() * 10000) + 10000)
      .toString()
      .substring(1);
    // console.log(seq);
    return seq;
    // return '0123';
  },
  /**
   * Function to generate random otp
   * 12-08-2022
   */
  randomPasswordgenerator: function () {
    var seq = (Math.floor(Math.random() * 10000) + 10000)
      .toString()
      .substring(1);
    // console.log(seq);
    return seq;
    // return '0123';
  },

  randomCODEgenerator: function (length) {
    let characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";

    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return result;
  },

  //string random generate
  stringGen(len) {
    var result = [];
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    var charactersLength = characters.length;
    for (var i = 0; i < len; i++) {
      result.push(
        characters.charAt(Math.floor(Math.random() * charactersLength))
      );
    }
    return result.join("");
  },

  RandomString: function (length, callback) {
    var text = "";
    var possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < length; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    callback(text);
  },

  /**
   * Function to send email to users
   * @param {subject} subject
   * @param {to email} to_email
   * @param {message} message
   * @param {Function} callback
   */
  send_email: function (subject, to_email, message, callback) {
    var transporter = require("nodemailer").createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: GLOBALS.EMAIL_ID,
        pass: GLOBALS.EMAIL_PASSWORD,
      },
    });

    var mailOptions = {
      from: GLOBALS.EMAIL_ID,
      to: to_email,
      subject: subject,
      html: message,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        callback(false);
      } else {
        callback(true);
      }
    });
  },

  /*
   ** Common Single Insert operation
   ** 12-08-2022
   */

  singleInsert: function (tablename, params, callback) {
    con.query(
      "INSERT INTO " + tablename + " SET ?",
      params,
      function (error, result, fields) {
        
        if (!error) {
          callback(result.insertId, error);
        } else {
          console.log(error);
          callback(null, error);
        }
      }
    );
  },

  /*
   ** Common Single update operation
   ** 12-08-2022
   */
  singleUpdate: function (tablename, params, condition, callback) {
    con.query(
      "UPDATE " + tablename + " SET ? WHERE " + condition + " ",
      params,
      function (error, result, fields) {
        if (!error) {
          callback(result, error);
        } else {
          console.log(error);
          callback(null, error);
        }
      }
    );
  },

  /*
   ** Common Delete function
   ** 12-08-2022
   */
  singleDelete: function (tablename, condition, callback) {
    con.query(
      "DELETE FROM " + tablename + " WHERE " + condition + " ",
      function (error, result, fields) {
        if (!error) {
          callback(result, error);
        } else {
          console.log(error);
          callback(null, error);
        }
      }
    );
  },

  /*
   ** Common Delete function
   ** 15-12-2022
   */

  getCommonSingleRecord: function (tablename, condition, callback) {
    con.query(
      "SELECT * from " + tablename + " WHERE " + condition + " ",
      function (error, result, fields) {
        if (!error) {
          callback(result[0], error);
        } else {
          console.log(error);
          callback([], error);
        }
      }
    );
  },

  /*
   ** Common get Multiple record function
   **  20-12-2022
   */
  getCommonMultipleRecord: function (tablename, condition, callback) {
    con.query(
      "SELECT * from " + tablename + " WHERE " + condition + " ",
      function (error, result, fields) {
        if (!error) {
          callback(result, error);
        } else {
          console.log(error);
          callback([], error);
        }
      }
    );
  },

  count: function (tablename, where, callback) {
    con.query(
      "SELECT COUNT(id) as count FROM " + tablename + " WHERE   " + where + "",
      function (error, result, fields) {
        if (!error) {
          callback(result[0].count, error);
        } else {
          console.log(err);
          callback(null, error);
        }
      }
    );
  },

  // avrage: function (tablename, where, callback) {

  //     con.query("SELECT AVG(ratting) as avg_rating FROM " + tablename + " WHERE  is_deleted='0' AND " + where + "", function (error, result, fields) {
  //         if (!error) {
  //             callback(result[0].avg_rating, error);
  //         } else {
  //             callback(null, error);
  //         }
  //     });

  // },

  /*
   ** Insert Notification
   ** 21-09-2022
   */
  insertNotification: function (notification, callback) {
    delete notification.message;
    con.query(
      "INSERT INTO tbl_notification SET ?",
      notification,
      function (err, result) {
        if (!err) {
          callback(result.insertId);
        } else {
          console.log(err);
          callback(null, err);
        }
      }
    );
  },

  //get distance query
  getdistancequery: function (latitude, longitude, latfield, longfield) {
    return (
      "6372 * 2 * ASIN(SQRT( POWER(SIN(('" + latitude + "' - " + latfield + ") * pi()/180 / 2), 2) + COS('" + latitude + "' * pi()/180) * COS(" + latfield + " * pi()/180) *POWER(SIN(('" + longitude + "' - " + longfield + ") * pi()/180 / 2), 2) ))"
    );
  },

  //common single select tabel details
  common_Singleselect: function (query, callback) {
    //select query
    con.query(query, function (err, result, fields) {
      console.log(this.sql);
      if (!err && result.length > 0) {
        callback(result[0]);
      } else {
        if (err) {
          console.log("Common single Select Error :- ", err);
        }
        callback(null);
      }
    }); //end select query
  },

  //common Multiple select tabel details
  common_Multipleselect: function (query, callback) {
    //select query
    con.query(query, function (err, result, fields) {
      // console.log(this.sql);
      // return
      if (!err && result.length > 0) {
        callback(result);
      } else {
        if (err) {
          console.log("Common Multiple Select Error :- ", err);
        }
        callback(null);
      }
    }); //end select query
  },

  //common insert tabel details
  common_insert: function (tabelname, insparam, callback) {
    //insert query
    con.query(
      "INSERT INTO " + tabelname + " SET ?",
      insparam,
      function (err, result, fields) {
        if (!err) {
          callback(result.insertId);
        } else {
          console.log("Common insert Error :- ", err);
          callback(0);
        }
      }
    ); //end insert query
  },

  //common update tabel details
  common_update: function (tabelname, wherecon, updparam, callback) {
    //update query
    con.query(
      "UPDATE " + tabelname + " SET ? WHERE " + wherecon,
      updparam,
      function (err, result, fields) {
        console.log(this.sql)
        if (!err) {
          callback(true);
        } else {
          console.log("Common Update Error :- ", err);
          callback(false);
        }
      }
    ); //end update query
  },

  getWeekDayName: function (current_day) {
    var week_days = [];
    for (let index = 0; index < 7; index++) {
      const date = new Date(current_day.getTime());
      date.setDate(date.getDate() + index);
      var dt = date_time.create(date);
      var formatted = dt.format("Y-m-d");

      var week_names = new Date(formatted)
        .toLocaleString("en-us", { weekday: "long" })
        .toLowerCase();
      week_days.push(week_names);
    }
    return week_days;
  },

};
module.exports = Validate;