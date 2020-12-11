exports.weatherDetails = (req, res) => {
  try {
    const weatherData = req.weatherData;
    const tempData = {};
    tempData.current = { temp_f: weatherData.data.current.temp_f };
    
    const forecastData = weatherData.data.forecast.forecastday[0].hour;
    tempData.forecast = forecastData.map(data => {
      return {
        time: data.time,
        temp_f: data.temp_f
      };
    });

    res.status(200).json(tempData);
  } catch (err) {
    res.status(500).json({ error: err });
  }
}