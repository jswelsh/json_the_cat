const request = require('request');
const parametersIn = process.argv.splice(2);
  
request(`https://api.thecatapi.com/v1/breeds/search?q=${parametersIn}`, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      
  const data = JSON.parse(body);
  console.log(typeof(data));
  if ((!data) || ((Object.entries(data).length === 0))) {
    console.log("ERROR: breed not found!");
    return;
  } else console.log(data[0].description);

});

