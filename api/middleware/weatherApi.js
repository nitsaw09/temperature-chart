const { response } = require("../../app");

const axios = require('axios');

module.exports = (req, res, next) => {
  axios.get("https://api.weatherapi.com/v1/forecast.json", {
    params: {
      key: "3738897fde7047f0a1822737203011",
      q: 20171,
      days: 1
    }
  })
  .then(response => {
    req.weatherData = response;
    next();
  })
  .catch(error => {
    return res.status(500).json({ error: error })
  });
}