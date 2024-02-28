var GLOBALS = require('./constants');
var exports = module.exports = {};

exports.forgot_password = function (result, callback) {
  console.log(result)
  const template = `<!DOCTYPE html>
    <html xmlns="http://www.w3.org/1999/xhtml">
        <head>
          <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Forgot Password</title>
    
            <style type="text/css">
                @media only screen and (max-width: 480px) {
                body,
                table,
                td,
                p,
                a,
                li,
                blockquote {
                    -webkit-text-size-adjust: none !important
                }
                body {
                    width: 100% !important;
                    min-width: 100% !important
                }
                td[id=bodyCell] {
                    padding: 10px !important
                }
                table.kmMobileHide {
                    display: none !important
                }
                table[class=kmTextContentContainer] {
                    width: 100% !important
                }
                table[class=kmBoxedTextContentContainer] {
                    width: 100% !important
                }
                td[class=kmImageContent] {
                    padding-left: 0 !important;
                    padding-right: 0 !important
                }
                img[class=kmImage],
                img.kmImage {
                    width: 100% !important
                }
                td.kmMobileStretch {
                    padding-left: 0 !important;
                    padding-right: 0 !important
                }
                table[class=kmSplitContentLeftContentContainer],
                table.kmSplitContentLeftContentContainer,
                table[class=kmSplitContentRightContentContainer],
                table.kmSplitContentRightContentContainer,
                table[class=kmColumnContainer],
                td[class=kmVerticalButtonBarContentOuter] table[class=kmButtonBarContent],
                td[class=kmVerticalButtonCollectionContentOuter] table[class=kmButtonCollectionContent],
                table[class=kmVerticalButton],
                table[class=kmVerticalButtonContent] {
                    width: 100% !important
                }
                td[class=kmButtonCollectionInner] {
                    padding-left: 9px !important;
                    padding-right: 9px !important;
                    padding-top: 9px !important;
                    padding-bottom: 0 !important;
                    background-color: transparent !important
                }
                td[class=kmVerticalButtonIconContent],
                td[class=kmVerticalButtonTextContent],
                td[class=kmVerticalButtonContentOuter] {
                    padding-left: 0 !important;
                    padding-right: 0 !important;
                    padding-bottom: 9px !important
                }
                table[class=kmSplitContentLeftContentContainer] td[class=kmTextContent],
                table[class=kmSplitContentRightContentContainer] td[class=kmTextContent],
                table[class=kmColumnContainer] td[class=kmTextContent],
                table[class=kmSplitContentLeftContentContainer] td[class=kmImageContent],
                table[class=kmSplitContentRightContentContainer] td[class=kmImageContent],
                table.kmSplitContentLeftContentContainer td.kmImageContent,
                table.kmSplitContentRightContentContainer td.kmImageContent {
                    padding-top: 9px !important
                }
                td[class="rowContainer kmFloatLeft"],
                td.rowContainer.kmFloatLeft,
                td[class="rowContainer kmFloatLeft firstColumn"],
                td.rowContainer.kmFloatLeft.firstColumn,
                td[class="rowContainer kmFloatLeft lastColumn"],
                td.rowContainer.kmFloatLeft.lastColumn {
                    float: left;
                    clear: both;
                    width: 100% !important
                }
                table[class=templateContainer],
                table[class="templateContainer brandingContainer"],
                div[class=templateContainer],
                div[class="templateContainer brandingContainer"],
                table[class=templateRow] {
                    max-width: 600px !important;
                    width: 100% !important
                }
                h1 {
                    font-size: 24px !important;
                    line-height: 130% !important
                }
                h2 {
                    font-size: 20px !important;
                    line-height: 130% !important
                }
                h3 {
                    font-size: 18px !important;
                    line-height: 130% !important
                }
                h4 {
                    font-size: 16px !important;
                    line-height: 130% !important
                }
                td[class=kmTextContent] {
                    font-size: 14px !important;
                    line-height: 130% !important
                }
                td[class=kmTextBlockInner] td[class=kmTextContent] {
                    padding-right: 18px !important;
                    padding-left: 18px !important
                }
                table[class="kmTableBlock kmTableMobile"] td[class=kmTableBlockInner] {
                    padding-left: 9px !important;
                    padding-right: 9px !important
                }
                table[class="kmTableBlock kmTableMobile"] td[class=kmTableBlockInner] [class=kmTextContent] {
                    font-size: 14px !important;
                    line-height: 130% !important;
                    padding-left: 4px !important;
                    padding-right: 4px !important
                }
                }
                .btn {
                  display: inline-block;
                  padding: 6px 12px;
                  margin-bottom: 0;
                  font-size: 14px;
                  font-weight: 400;
                  line-height: 1.42857143;
                  text-align: center !important;
                  white-space: nowrap;
                  vertical-align: middle;
                  -ms-touch-action: manipulation;
                  touch-action: manipulation;
                  cursor: pointer;
                  -webkit-user-select: none;
                  -moz-user-select: none;
                  -ms-user-select: none;
                  user-select: none;
                  background-image: none;
                  border: 1px solid transparent;
                  border-radius: 4px;
                }
                .btn-default, .btn-default:hover, .btn-default:focus, .btn-default:active, .btn-default.active, .btn-default.focus, .btn-default:active, .btn-default:focus, .btn-default:hover, .open > .dropdown-toggle.btn-default {
                    background: #cf3246 !important;
                    border: 1px solid #cf3246 !important;
                    color: white !important;
                    text-decoration: none !important;
                }
            </style>
            <!--[if mso]>
            <style>
              
              .templateContainer {
                border: 1px none #aaaaaa;
                background-color: #FFFFFF;
                
              }
              #brandingContainer {
                background-color: transparent !important;
                border: 0;
              }
              
              
              .templateContainerInner {
                padding: 0px;
              }
              
            </style>
            <![endif]-->
        </head>
          <body style="margin:0;padding:0;background-color:#FFF">
            <center>
              <table align="center" border="0" cellpadding="0" cellspacing="0" id="bodyTable" width="100%" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;padding:0;background-color:#FFF;height:100%;margin:0;width:100%">
                <tbody>
                  <tr>
                    <td align="center" id="bodyCell" valign="top" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;padding-top:50px;padding-left:20px;padding-bottom:20px;padding-right:20px;border-top:0;height:100%;margin:0;width:100%">
                      <!--[if !mso]><!-->
                      <div class="templateContainer" style="border:1px none #aaa;border-radius:45px 0px 45px 0px;background: linear-gradient(to right, #fff 0%, #fff 100%);display: table; width:600px">
                        <div class="templateContainerInner" style="padding:0">
                          <!--<![endif]-->
                    <!--[if mso]>
                      <table border="0" cellpadding="0" cellspacing="0" class="templateContainer"  width="600" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;">
                      <tbody>
                        <tr>
                          <td class="templateContainerInner" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;">
                            <![endif]-->
                            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0">
                              <tr>
                                <td align="center" valign="top" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0">
                                  <table border="0" cellpadding="0" cellspacing="0" class="templateRow" width="100%" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0">
                                    <tbody>
                                      <tr>
                                        <td class="rowContainer kmFloatLeft" valign="top" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0">
                                          <table border="0" cellpadding="0" cellspacing="0" class="kmTextBlock" width="100%" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0">
                                            <tbody class="kmTextBlockOuter">
                                              <tr>
                                                <td class="kmTextBlockInner" valign="top" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;">
                                                  <table align="left" border="0" cellpadding="0" cellspacing="0" class="kmTextContentContainer" width="100%" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0">
                                                    <tbody>
                                                      <tr>
                                                        <td class="kmTextContent" valign="top" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;color:#000;font-family:Helvetica, Arial;font-size:14px;line-height:150%;text-align:left;padding-top:9px;padding-bottom:9px;padding-left:18px;padding-right:18px;">
                                                        </td>
                                                        welcome </tbody>
                                                  </table>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                          <table border="0" cellpadding="0" cellspacing="0" class="kmImageBlock" width="100%" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;min-width:100%">
                                            <tbody class="kmImageBlockOuter">
                                              <tr>
                                                <td class="kmImageBlockInner" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;padding:9px;" valign="top">
                                                  <table align="left" border="0" cellpadding="0" cellspacing="0" class="kmImageContentContainer" width="100%" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;min-width:100%">
                                                    <tbody>
                                                      <tr>
                                                        <td class="kmImageContent" valign="top" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;padding:0;padding-top:0px;padding-bottom:0;padding-left:9px;padding-right:9px;text-align: center;
                                                        background: linear-gradient(to right, #fff 0%, #fff 100%) !important;">
                                                          <!-- Your Logo -->
    
                                                          <img align="center" alt="Logo" class="kmImage" src="${GLOBALS.BASE_URL}${GLOBALS.LOGO}" width="100" style="border:0;height:auto;line-height:100%;outline:none;text-decoration:none;padding-bottom:0;display:inline;vertical-align:bottom;max-width:199px;" />
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                          <table border="0" cellpadding="0" cellspacing="0" class="kmTextBlock" width="100%" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0">
                                            <tbody class="kmTextBlockOuter">
                                              <tr>
                                                <td class="kmTextBlockInner" valign="top" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;">
                                                  <table align="left" border="0" cellpadding="0" cellspacing="0" class="kmTextContentContainer" width="100%" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0">
                                                    <tbody>
                                                      <tr>
                                                      forgot_password                       <td class="kmTextContent" valign="top" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;color:#000;font-family:Helvetica, Arial;font-size:14px;line-height:150%;text-align:left;padding-top:9px;padding-bottom:9px;padding-left:18px;padding-right:18px;">
                                                          <span style="color:#000000;"></span>
                                                          <!-- Your Content As below -->
                                                          <p style="margin:0;padding-bottom:1em;text-align: justify;"><span style="font-size:16px;"><span style="color: rgb(0, 0, 0);"><span style="font-family: arial,helvetica,sans-serif;"></span></span></span></p>
                                                          <p style="margin:0;padding-bottom:1em"><span style="font-family:arial,helvetica,sans-serif;"><span style="font-size: 16px;">Dear <strong>${result.first_name} ${result.last_name}</strong>,</span></span></p>
                                                          <p style="margin:0;padding-bottom:1em"><span style="font-family:arial,helvetica,sans-serif;"><span style="font-size: 16px;">This is your otp: <strong>${result.otp_code}</strong>,</span></span></p>
                                                          <p style="margin:0;padding-bottom:1em"><span style="font-family:arial,helvetica,sans-serif;"><span style="font-size: 16px;">You recently requested to reset your password for your ${GLOBALS.APP_NAME} account. Please use below link to reset your password.</span></span></p>
                                                          <p style="margin:0;padding-bottom:1em"> </p>
                                                          
                                                          <p style="text-align: center;margin:0;padding-bottom:1em">
                                                            <span style="font-family:arial,helvetica,sans-serif;">
                                                              <span style="font-size: 16px;">
                                                                <a href="http://localhost:8030/api/v1/user/resetform/${result.id}" target="_blank" class="btn btn-default" style="word-wrap:break-word;color:#0000cd;font-weight:normal;text-decoration:underline">Change Password</a>
                                                              </span>
                                                            </span>
                                                          </p>

                                                         <p style="margin:0;padding-bottom:1em"><span style="font-family:arial,helvetica,sans-serif;"><span style="font-size: 16px;">If you did not request a password request, please ignore this email or reply to let us know.</span></span></p>

                                                          <p style="margin:0;padding-bottom:1em"><span style="font-family:arial,helvetica,sans-serif;"><span style="font-size: 16px;">Please do not share your password with anyone.</span></span></p>
                                                          <p style="margin:0;padding-bottom:1em"> </p>
                                                          <p style="margin:0;padding-bottom:1em"><span style="font-family:arial,helvetica,sans-serif;"><span style="font-size: 16px;">Thank you,</span></span></p>
                                                          <p style="margin:0;padding-bottom:0"><span style="font-family:arial,helvetica,sans-serif;"><span style="font-size: 16px;">${GLOBALS.APP_NAME} Team</span></span></p>
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                  forgot_password                </table>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </table>
                            <!--[if !mso]><!-->
                          </div>
                        </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </center>
          </body>
      </html>
    `;
  callback(template);
}

//forgot password mail template
exports.emailVerify = function (result, callback) {
  const template = `<!DOCTYPE html>
    <html xmlns="http://www.w3.org/1999/xhtml">
        <head>
          <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Forgot Password</title>
    
            <style type="text/css">
                @media only screen and (max-width: 480px) {
                body,
                table,
                td,
                p,
                a,
                li,
                blockquote {
                    -webkit-text-size-adjust: none !important
                }
                body {
                    width: 100% !important;
                    min-width: 100% !important
                }
                td[id=bodyCell] {
                    padding: 10px !important
                }
                table.kmMobileHide {
                    display: none !important
                }
                table[class=kmTextContentContainer] {
                    width: 100% !important
                }
                table[class=kmBoxedTextContentContainer] {
                    width: 100% !important
                }
                td[class=kmImageContent] {
                    padding-left: 0 !important;
                    padding-right: 0 !important
                }
                img[class=kmImage],
                img.kmImage {
                    width: 100% !important
                }
                td.kmMobileStretch {
                    padding-left: 0 !important;
                    padding-right: 0 !important
                }
                table[class=kmSplitContentLeftContentContainer],
                table.kmSplitContentLeftContentContainer,
                table[class=kmSplitContentRightContentContainer],
                table.kmSplitContentRightContentContainer,
                table[class=kmColumnContainer],
                td[class=kmVerticalButtonBarContentOuter] table[class=kmButtonBarContent],
                td[class=kmVerticalButtonCollectionContentOuter] table[class=kmButtonCollectionContent],
                table[class=kmVerticalButton],
                table[class=kmVerticalButtonContent] {
                    width: 100% !important
                }
                td[class=kmButtonCollectionInner] {
                    padding-left: 9px !important;
                    padding-right: 9px !important;
                    padding-top: 9px !important;
                    padding-bottom: 0 !important;
                    background-color: transparent !important
                }
                td[class=kmVerticalButtonIconContent],
                td[class=kmVerticalButtonTextContent],
                td[class=kmVerticalButtonContentOuter] {
                    padding-left: 0 !important;
                    padding-right: 0 !important;
                    padding-bottom: 9px !important
                }
                table[class=kmSplitContentLeftContentContainer] td[class=kmTextContent],
                table[class=kmSplitContentRightContentContainer] td[class=kmTextContent],
                table[class=kmColumnContainer] td[class=kmTextContent],
                table[class=kmSplitContentLeftContentContainer] td[class=kmImageContent],
                table[class=kmSplitContentRightContentContainer] td[class=kmImageContent],
                table.kmSplitContentLeftContentContainer td.kmImageContent,
                table.kmSplitContentRightContentContainer td.kmImageContent {
                    padding-top: 9px !important
                }
                td[class="rowContainer kmFloatLeft"],
                td.rowContainer.kmFloatLeft,
                td[class="rowContainer kmFloatLeft firstColumn"],
                td.rowContainer.kmFloatLeft.firstColumn,
                td[class="rowContainer kmFloatLeft lastColumn"],
                td.rowContainer.kmFloatLeft.lastColumn {
                    float: left;
                    clear: both;
                    width: 100% !important
                }
                table[class=templateContainer],
                table[class="templateContainer brandingContainer"],
                div[class=templateContainer],
                div[class="templateContainer brandingContainer"],
                table[class=templateRow] {
                    max-width: 600px !important;
                    width: 100% !important
                }
                h1 {
                    font-size: 24px !important;
                    line-height: 130% !important
                }
                h2 {
                    font-size: 20px !important;
                    line-height: 130% !important
                }
                h3 {
                    font-size: 18px !important;
                    line-height: 130% !important
                }
                h4 {
                    font-size: 16px !important;
                    line-height: 130% !important
                }
                td[class=kmTextContent] {
                    font-size: 14px !important;
                    line-height: 130% !important
                }
                td[class=kmTextBlockInner] td[class=kmTextContent] {
                    padding-right: 18px !important;
                    padding-left: 18px !important
                }
                table[class="kmTableBlock kmTableMobile"] td[class=kmTableBlockInner] {
                    padding-left: 9px !important;
                    padding-right: 9px !important
                }
                table[class="kmTableBlock kmTableMobile"] td[class=kmTableBlockInner] [class=kmTextContent] {
                    font-size: 14px !important;
                    line-height: 130% !important;
                    padding-left: 4px !important;
                    padding-right: 4px !important
                }
                }
            </style>forgot_password
            <!--[if mso]>
            <style>
              
              .templateContainer {
                border: 1px none #aaaaaa;
                background-color: #FFFFFF;
                
              }
              #brandingContainer {
                background-color: transparent !important;
                border: 0;
              }
              
              
              .templateContainerInner {
                padding: 0px;
              }
              
            </style>
            <![endif]-->
        </head>
          <body style="margin:0;padding:0;background-color:#FFF">
            <center>
              <table align="center" border="0" cellpadding="0" cellspacing="0" id="bodyTable" width="100%" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;padding:0;background-color:#FFF;height:100%;margin:0;width:100%">
                <tbody>
                  <tr>
                    <td align="center" id="bodyCell" valign="top" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;padding-top:50px;padding-left:20px;padding-bottom:20px;padding-right:20px;border-top:0;height:100%;margin:0;width:100%">
                      <!--[if !mso]><!-->
                      <div class="templateContainer" style="border:1px none #aaa;border-radius:45px 0px 45px 0px;background: linear-gradient(to right, #fff 0%, #fff 100%);display: table; width:600px">
                        <div class="templateContainerInner" style="padding:0">
                          <!--<![endif]-->
                    <!--[if mso]>
                      <table border="0" cellpadding="0" cellspacing="0" class="templateContainer"  width="600" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;">
                      <tbody>
                        <tr>
                          <td class="templateContainerInner" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;">
                            <![endif]-->
                            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0">
                              <tr>
                                <td align="center" valign="top" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0">
                                  <table border="0" cellpadding="0" cellspacing="0" class="templateRow" width="100%" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0">
                                    <tbody>
                                      <tr>
                                        <td class="rowContainer kmFloatLeft" valign="top" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0">
                                          <table border="0" cellpadding="0" cellspacing="0" class="kmTextBlock" width="100%" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0">
                                            <tbody class="kmTextBlockOuter">
                                              <tr>
                                                <td class="kmTextBlockInner" valign="top" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;">
                                                  <table align="left" border="0" cellpadding="0" cellspacing="0" class="kmTextContentContainer" width="100%" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0">
                                                    <tbody>
                                                      <tr>
                                                        <td class="kmTextContent" valign="top" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;color:#000;font-family:Helvetica, Arial;font-size:14px;line-height:150%;text-align:left;padding-top:9px;padding-bottom:9px;padding-left:18px;padding-right:18px;">
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                          <table border="0" cellpadding="0" cellspacing="0" class="kmImageBlock" width="100%" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;min-width:100%">
                                            <tbody class="kmImageBlockOuter">
                                              <tr>
                                                <td class="kmImageBlockInner" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;padding:9px;" valign="top">
                                                  <table align="left" border="0" cellpadding="0" cellspacing="0" class="kmImageContentContainer" width="100%" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;min-width:100%">
                                                    <tbody>
                                                      <tr>
                                                        <td class="kmImageContent" valign="top" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;padding:0;padding-top:0px;padding-bottom:0;padding-left:9px;padding-right:9px;text-align: center;
                                                        background: linear-gradient(to right, #fff 0%, #fff 100%) !important;">
                                                          <!-- Your Logo -->
    
                                                          <img align="center" alt="Logo" class="kmImage" src="${GLOBALS.BASE_URL}${GLOBALS.LOGO}" width="100" style="border:0;height:auto;line-height:100%;outline:none;text-decoration:none;padding-bottom:0;display:inline;vertical-align:bottom;max-width:199px;" />
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                          <table border="0" cellpadding="0" cellspacing="0" class="kmTextBlock" width="100%" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0">
                                            <tbody class="kmTextBlockOuter">
                                              <tr>
                                                <td class="kmTextBlockInner" valign="top" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;">
                                                  <table align="left" border="0" cellpadding="0" cellspacing="0" class="kmTextContentContainer" width="100%" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0">
                                                    <tbody>
                                                      <tr>
                                                        <td class="kmTextContent" valign="top" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;color:#000;font-family:Helvetica, Arial;font-size:14px;line-height:150%;text-align:left;padding-top:9px;padding-bottom:9px;padding-left:18px;padding-right:18px;">
                                                          <span style="color:#000000;"></span>
                                                          <!-- Your Content As below -->
                                                          <p style="margin:0;padding-bottom:1em;text-align: justify;"><span style="font-size:16px;"><span style="color: rgb(0, 0, 0);"><span style="font-family: arial,helvetica,sans-serif;"></span></span></span></p>
                                                          <p style="margin:0;padding-bottom:1em"><span style="font-family:arial,helvetica,sans-serif;"><span style="font-size: 16px;"><strong>Your verification code is : ${result.otp_code}</strong></span></span></p>

                                                          <p style="margin:0;padding-bottom:1em">  You have recently requested For the verification code for your ${GLOBALS.APP_NAME} account ${result.email}</p>

                                                          <p style="margin:0;padding-bottom:1em">  Please enter this Verification Code to move further with your registration process.</p>

                                                          <p style="margin:0;padding-bottom:1em">  If you are having any issues with your account, please don't hesitate to contact us by replying to this email.</p>

                                                          <p style="margin:0;padding-bottom:1em"> </p>
                                                          <p style="margin:0;padding-bottom:0.5em"><span style="font-family:arial,helvetica,sans-serif;"><span style="font-size: 16px;">Thank you,</span></span></p>
                                                          <p style="margin:0;padding-bottom:0"><span style="font-family:arial,helvetica,sans-serif;"><span style="font-size: 16px;">${GLOBALS.APP_NAME} Team</span></span></p>
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </table>
                            <!--[if !mso]><!-->
                          </div>
                        </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </center>
          </body>
      </html>
    `;
  callback(template);
}

exports.sendInvoiceToUser = function (result, receiptdatetimes, callback) {
  //console.log(result)
  const template = `<!doctype html>
  <html>
  <head>
     <meta content="text/html; chaOMRet=utf-8" http-equiv="Content-Type" />
     <meta name="viewport" content="width=device-width, initial-scale=1" />
     <meta http-equiv="Content-Type" content="text/html; chaOMRet=utf-8">
     <meta name="viewport" content="width=device-width">
     <meta http-equiv="X-UA-Compatible" content="IE=9; IE=8; IE=7;
        IE=EDGE">
     <title>Smartshuttle - Order Summary</title>
     <style type="text/css">
        @import url('https://fonts.googleapis.com/css?family=Montserrat');
     </style>
  </head>
  <body style="background-color: #f7f7f7; margin: 0px; padding: 0px; font-size: 16px; font-family: 'Montserrat', sans-serif;">
     <div class="" style="max-width: 700px; margin: 0px auto; padding: 10px; background-color: #fff;">
        <table width="100%;" cellpadding="5" cellspacing="5">
           <tr>
              <td>
                 <table style="border-bottom: 3px solid #02ccff;" cellpadding="0" cellspacing="0" width="100%">
                    <tr valign="middle">
                       <td align="left"> 
                          <img src="${GLOBALS.BASE_URL_WITHOUT_API}${GLOBALS.RECEIPT_LOGO}" alt="Logo" style="padding: 4px;width:200px;" width="100">
                       </td>
                       <td align="right">Date:
                          <span style="margin-top: 22px; float: right; vertical-align: bottom; text-align: right;font-weight: 600;color: #02ccff;font-family: 'Montserrat', sans-serif;">${receiptdatetimes}</span>
                       </td>
                    </tr>
                 </table>
              </td>
           </tr>
           <tr>
              <td>
                 <table cellpadding="5" cellspacing="5" width="100%">
                    <tr>
                       <td align="left" valign="middle" style="font-family: 'Montserrat', sans-serif;">
                          Order Number : <b> ${result.trip_uniqueid} </b>
                       </td>
                       <td align="right" style="font-family: 'Montserrat', sans-serif;">
                         Transaction ID : <b> ${result.transaction_id} </b>
                       </td>
                       
                    </tr>
                   <!--  <tr>
                       <td colspan="2" align="center">
                          <img src="${result.profile_image}" alt="User image" style="margin-top:15px;border-radius: 50%;padding: 4px;border: 1px solid #02ccff;background-color: #fff;line-height: 1.42857143;display: inline-block;width:120px; height: 120px !important; object-fit: cover; object-position: center; margin: 15px auto 0 auto">
                       </td>esult, receiptdatetimes, call
                    <tr>
                       <td colspan="2" align="left" style="font-family: 'Montserrat', sans-serif;">
                         <h3>Here’s your receipt for your booked ride, ${result.full_name}.</h3>
                         <h6>We hope to provide you an enjoyable riding experience. Thank you for being with us.</h6>
                       </td>
                    </tr>
                 </table>
                   
              </td>
           </tr>
           <tr>
              <td>
                 <table style="line-height: 14px; margin-top: 10px;" cellpadding="5" cellspacing="1"  width="100%">
                    <tr style="font-weight: bold;">
                       <td align="left" style="font-family: 'Montserrat', sans-serif;padding: 18px 0px 18px 0px ">
                          Total
                       </td>
                       <td align="right" style="font-family: 'Montserrat', sans-serif;">
                          <span> </span> ${(result.promocode_id > 0) ? result.old_amount : result.total_amount} 
                          templater style="">
                       <td align="left" style="font-family: 'Montserrat', sans-serif;padding: 18px 0px 18px 0px " >
                          Trip Fare
                       </td>
                       <td align="right" style="font-family: 'Montserrat', sans-serif;">
                          <span> </span> ${(result.promocode_id > 0) ? result.old_amount : result.total_amount} 
                       </td>
                    </tr>

                    <tr style="padding: 5px"><td colspan="2" style="margin:0px 0px; padding: 0px; height: 1px; width: 100%; border: 0px; background-color:#02ccff;" ></td></tr>
                    <tr style="">
                       <td align="left" style="font-family: 'Montserrat', sans-serif;padding: 18px 0px 18px 0px " >
                          Discount Applied(${(result.promocode_id > 0) ? result.promocodename : 'No promocode applied'})
                       </td>
                       <td align="right" style="font-family: 'Montserrat', sans-serif;">
                          <span> </span> ${(result.promocode_id > 0) ? result.discount_amount : '0'} 
                       </td>
                    </tr>

                   <tr style="padding: 5px"><td colspan="2" style="margin:0px 0px; padding: 0px; height: 1px; width: 100%; border: 0px; background-color:#02ccff;" ></td></tr>
                    <tr style="">
                       <td align="left" style="font-family: 'Montserrat', sans-serif;padding: 18px 0px 18px 0px ">
                          SubTotal
                       </td>
                       <td align="right" style="font-family: 'Montserrat', sans-serif;">
                          <span> </span> ${result.total_amount}
                       </td>
                    </tr>
                     <tr style="padding: 5px"><td colspan="2" style="margin:0px 0px; padding: 0px; height: 1px; width: 100%; border: 0px; background-color:#02ccff;" ></td></tr>
                    <tr >
                       <td align="left" colspan="2" >
                         <p style="font-family: 'Montserrat', sans-serif;line-height: 1.5;">This is not a tax invoice. This is a payment receipt for the transportation driver by ${result.driver_details.full_name}.</p>
                       </td>
                      
                    </tr>
                 </table>
                  <hr style="margin:0px 0px; padding: 0px; height: 1px; width: 100%; border: 0px; background-color:#02ccff;" />
              </td>
           </tr>
            <hr style="margin:0px 0px; padding: 0px; height: 1px; width: 100%; border: 0px; background-color:#02ccff;" />
           <tr>
              <td>
                 <table width="100%" style="padding-top:20px">
                  <tr>
                        <td align="left" colspan="2" >
                         <p style="font-family: 'Montserrat', sans-serif;line-height: 1.5;"><b>Driver Name</b>- ${result.driver_details.full_name}.</b></p>
                         <p style="font-family: 'Montserrat', sans-serif;"><b>Vehicle Number</b> - ${result.driver_details.car_number}</p>
                         <p style="font-family: 'Montserrat', sans-serif;line-height: 1;"><b>Vehicle Make/ Model</b>-${result.driver_details.car_make} / ${result.driver_details.car_model} </p>
                         <p style="font-family: 'Montserrat', sans-serif;line-height: 1;"><b>Distance | Time</b>- ${result.total_distance} KM | ${result.total_time} min</p>
                         <p style="font-family: 'Montserrat', sans-serif;line-height: 1;"><b>Pick Up Address</b>- ${result.riders_details[0].pickup_address} </p>
                         <p style="font-family: 'Montserrat', sans-serif;line-height: 1;"><b>Drop-Off Address</b>- ${result.riders_details[0].dropoff_address} </p>
                       </td>
                    </tr>
                    <!-- <tr valign="top">
                       <td style="width: 50%;">
                          <table width="100%" style="line-height: 24px;">
                             <tr valign="top">
                                <td width="15px;">
                                   <span style="height: 10px; width: 10px; border-radius: 20px; background-color:#02ccff; display: inline-block;"> </span>
                                </td>
                                <td>
                                   <b style="font-family: 'Montserrat', sans-serif;"> Pickup Address </b> <br/>
                                   <small style="line-height: 18px; display: inline-block;font-family: 'Montserrat', sans-serif;"> ${result.riders_details[0].pickup_address} </small>
                                </td>
                             </tr>
                          </table>
                       </td>
                       <td>
                          <table width="100%" style="line-height: 24px;">
                             <tr valign="top">
                                <td width="15px;">
                                   <span style="height: 10px; width: 10px; border-radius: 20px; background-color:#e59e2c; display: inline-block;"> </span>
                                </td>
                                <td>
                                   <b style="font-family: 'Montserrat', sans-serif;"> Dropoff Address </b> <br/>
                                   <small style="line-height: 18px; display: inline-block;font-family: 'Montserrat', sans-serif;"> ${result.riders_details[0].dropoff_address}  </small>
                                </td>
                             </tr>
                          </table>
                       </td>
                    </tr>-->
                 </table>
              </td>
           </tr>
            
           <tr>
              <td>
                 <hr style="margin:0px 0px; padding: 0px; height: 1px; width: 100%; border: 0px; background-color:#02ccff;" />
                 <table cellpadding="5" cellspacing="5" width="100%">
                    <tr>
                       <td colspan="2" align="center">
                          <h3 style="font-family: 'Montserrat', sans-serif;"> Rate Our App </h3>
                          <p style="font-family: 'Montserrat', sans-serif;">
                            Your feedback is valuable to us. Please let us know about your experience with the Smart Shuttle App. Click on the link below to rate us.
                          </p>
                       </td>
                    </tr>
                    <tr>
                       <td align="center">
                          <a href="#" style="text-align: center;padding: 10px 10px 10px 10px;background-color:#02ccff;color: #fff;text-decoration: none;font-family: 'Montserrat', sans-serif;">App Store</a>
                       </td>
                       <td align="center">
                          <a href="#" style="text-align: center;padding: 10px 10px 10px 10px;background-color:#02ccff;color: #fff;text-decoration: none;font-family: 'Montserrat', sans-serif;">Google Play</a>
                       </td>
                    </tr>
                 </table>
                 <hr style="margin:30px 0px 10px 0px; padding: 0px; height: 1px; width: 100%; border: 0px; background-color:#02ccff;" />
              </td>
           </tr>
        </table>
     </div>
  </body>
  </html>`;
  callback(template);
  },
  exports.welcome=function(request,callback){
    var temp=`
                <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Login Successfully</title>
            </head>
            <body>
                <h4>Hello ${request.email}</h4>
                <p>Thank you for register to broadband  </p>
                <p>temporary password is ${request.password}</p>
                <h4>Thank You</h4>
                <p>Rahul Panchal</p>

            </body>
            </html>
    `;
    callback(temp);
  },
  exports.complaintDetails=function(result,callback){
    console.log("result",result);
    var temp=`
                <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Login Successfully</title>
            </head>
            <body>
                <p>Thank you for give me feedback </p>
                <h3>Complaint Details</h3>
                <p>subject: ${result.subject}</p>
                <p>description: ${result.description}</p>
                <p>date ${result.date}</p>
                <p>time: ${result.time}</p>
                <p>status: ${result.status}</p>
                <h4>Thank You</h4>
                <p>Rahul Panchal</p>

            </body>
            </html>
    `;
    callback(temp);
}

