import express from 'express';
import WeatherService from '../services/weather.service.js';

const router = express.Router();
const weatherService = new WeatherService();

router.get('/:place', async (req, res) => {
  try {
    const { place } = req.params;
    const placeWeather = await weatherService.findOne(place);
    res.set('Cache-Control', 'public, max-age=3600');
    res.json(placeWeather);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
