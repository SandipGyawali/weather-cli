import axios from "axios";
import chalk from "chalk";
import { displayForeCastInfo, displayWeatherInfo } from "./display.js";

const API_KEY = "";
const BASE_URL = "http://api.openweathermap.org/data/2.5";

/**
 * @param city
 * @param country_code
 */
export async function getWeather(city?: string, country_code?: string) {
  try {
    const res = await axios.get(
      `${BASE_URL}/weather?q=${
        city ? city : country_code
      }&appid=${API_KEY}&units=metric`
    );

    if (res.status !== 200) {
      console.log(chalk.red("Unable to retrieve weather information"));
    } else {
      displayWeatherInfo(res.data);
    }
  } catch (error: any) {
    console.error(chalk.red(`Error fetching weather data:`), error.message);
  }
}

/**
 * @param location
 */
export async function getForeCastWeather(location: string) {
  try {
    const res = await axios.get(
      `${BASE_URL}/forecast?q=${location}&appid=${API_KEY}&units=metric`
    );

    if (res.status !== 200) {
      console.log(chalk.red("Unable to retrieve forecast information"));
    } else {
      displayForeCastInfo(res.data?.list);
    }
  } catch (error: any) {
    console.error(chalk.red("Error fetching weather data:"), error.message);
  }
}
