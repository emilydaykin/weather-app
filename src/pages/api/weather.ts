import axios from "axios";

const baseURL = "http://api.weatherapi.com/v1/forecast.json?";

export default async function handler(req: any, res: any): Promise<void> {
  if (req.method !== "GET") {
    return res.status(400).json({ message: `Cannot ${req.method} to ${req.url}` });
  }

  if (!req.query.city) {
    return res.status(400).json({
      status: "Failure",
      message: "Please specify the city (forecastPeriod and airQuality optional)",
    });
  }

  try {
    const { city, forecastPeriod, getAirQuality } = req.query;
    const requestUrl = `${baseURL}key=${process.env.SECRET_KEY}&q=${city}&days=${forecastPeriod}&aqi=${getAirQuality}&alerts=no`;
    const { data } = await axios.get<any>(requestUrl);
    return res.status(200).json(data);
  } catch (err) {
    // console.error(err);
    return res.status(500).json({ error: "No data found" });
  }
}
