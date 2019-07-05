const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, resp, body) => {
    if (!error) callback(error);
    const data = JSON.parse(body);

    if ((!data) || ((Object.entries(data).length === 0))) {
      callback(error);
      return;
    } else callback(error, data[0].description);
  });
};

module.exports = { fetchBreedDescription };
