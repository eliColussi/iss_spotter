// index.js
const { fetchMyIP } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });

// const { fetchCprdsByIP } = require('./iss');



// fetchCoordsByIP('165.225.208.159', (error, data) => {

//   if (error) {
//     console.log(`It didn't work: ${error}`);
//     return;
//   }

//   console.log("It worked! Returned coordinates:", data);
// });


// fetchISSFlyoverTimes({ latitude: 48.4284, longitude: 123.3656 }, (error, data) => {

//   if (error) {
//     console.log(`It didn't work: ${error}`);
//     return;
//   }

//   console.log("It worked! Returned flyover times:", data);

// })

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds`);
  }
};

const { nextISSTimesForMyLocation } = require('./iss');

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
printPassTimes(passTimes);
});