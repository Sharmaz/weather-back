import dotenv from 'dotenv';

dotenv.config();

const config = {
  port: process.env.PORT || 3000,
  locationApi: process.env.LOCATION_API,
  weatherApi: process.env.WEATHER_API,
  apiKey: process.env.API_KEY,
};

export default config;
