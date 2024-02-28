let Globals = {

    'APP_NAME': 'Dating App',
    'LOGO': 'api/images/logo.png',
    'ARROW_IMAGE': 'api/images/arrow-right.gif',

    'BASE_URL': process.env.BASE_URL,
    'BASE_URL_WITHOUT_API': process.env.BASE_URL_WITHOUT_API,
    'PORT_BASE_URL': process.env.PORT_BASE_URL,
    'S3_BUCKET_ROOT': process.env.S3_BUCKET_ROOT,
    'API_KEY': process.env.API_KEY,
    'KEY': process.env.KEY,
    'IV': process.env.IV,
    'EMAIL_ID': process.env.EMAIL_ID,
    'EMAIL_PASSWORD': process.env.EMAIL_PASSWORD,
    'API_PASSWORD': process.env.API_PASSWORD,

    'S3_BUCKET_KEY': process.env.S3_BUCKET_KEY,
    'S3_BUCKET_SECRET': process.env.S3_BUCKET_SECRET,
    'S3_BUCKET_NAME': process.env.S3_BUCKET_NAME,
    'S3_BUCKET_ROOT': process.env.S3_BUCKET_ROOT,
    'S3_BUCKET_REGION': process.env.S3_BUCKET_REGION,


    'USER_IMAGE': 'user/',
    'PLACE_IMAGE': 'place/',
    'ADMIN_IMAGE': 'admin/',


    'PER_PAGE': '10',
    'CHAT_PER_PAGE':'10',

    
    //ERROR CODE
    'FAILED': 0,
    'SUCCESS': 1,
    'NO_DATA_FOUND': 2,
    'ACCOUNT_INACTIVE': 3,
    'OTP_VERIFICATION': 4,
    'EMAIL_VERIFICATION': 5,
    'FORCE_APP_UPDATE': 6,
    'SIMPLE_APP_UPDATE': 7,
    'UNDER_MAINTENANCE': 8,
    'INCORRECT_LOGIN_TYPE': 11,
    'DEVICE_TABLET_USE': 15,

}

module.exports = Globals;