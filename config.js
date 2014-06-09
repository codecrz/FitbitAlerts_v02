module.exports = {
	production: {
		db: 'mongodb://root:dormiinpace@novus.modulusmongo.net:27017/Puto8hij', // MongoDB connection string, ex: mongodb://db-user:db-password@mongo.onmodulus.net:27017/1234567
		fitbitClientKey: 'c55b9e492a3d45aaafa2acb0862c114b', // Your Fitbit application information found at https://dev.fitbit.com/apps
		fitbitClientSecret: 'ee649a0cd8fe4ab796dd3987e42cc871',
		host: 'fitbit-alerts-13586.onmodulus.net', // The hostname where this application is available publicly, ex: fitbitexample-9501.onmodulus.net
		twilioAccountSid: 'ACce23b4814039d9a68cb0f74bb4f95b83', // Found on your Twilio account page: https://www.twilio.com/user/account
		twilioAuthToken: '3e0eebe38c805034e1bac8315c1d187f',
		twilioPhoneNumber: '+18033805503' // The Twilio number that SMS will be sent from, ex: +14152363281
	}
};