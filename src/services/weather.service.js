import config from "../config/index.js";

class WeatherService {
  async findOne(place) {
    try {
      const response = await fetch(`${config.locationApi}/places?q=${place}`);
      const data = await response.json();

      const lat = data[0].lat;
      const long = data[0].long;

      const response2 = await fetch(`${config.weatherApi}/forecast?lat=${lat}&lon=${long}&appid=${config.apiKey}&units=metric`);
      const data2 = await response2.json();

      return data2;
    } catch (error) {
      console.log(error);
    }
  }
}

export default WeatherService;
