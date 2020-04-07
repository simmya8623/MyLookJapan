exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./public/MyLookJapan.spec.js']

};
// var browserstack = require('browserstack-local');

// exports.config = {
//   'seleniumAddress': 'http://hub-cloud.browserstack.com/wd/hub',

//   'capabilities': {
//     'browserstack.user': 'srijantechnologi3',
//     'browserstack.key': '59Hr6BCn3v5Zwqes5Eaz',
//     'browserstack.local': true,
//     'browserName': 'chrome',
//     'name': 'Bstack-[Protractor] Local Test'
//   },

//   // Code to start browserstack local before start of test
//   beforeLaunch: function(){
//     console.log("Connecting local");
//     return new Promise(function(resolve, reject){
//       exports.bs_local = new browserstack.Local();
//       exports.bs_local.start({'key': exports.config.capabilities['browserstack.key'] }, function(error) {
//         if (error) return reject(error);
//         console.log('Connected. Now testing...');

//         resolve();
//       });
//     });
//   },

//   // Code to stop browserstack local after end of test
//   afterLaunch: function(){
//     return new Promise(function(resolve, reject){
//       exports.bs_local.stop(resolve);
//     });
//   }
// };