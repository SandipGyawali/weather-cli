import axios from "axios";
import chalk from "chalk";
import {
  displayAirQuality,
  displayForeCastInfo,
  displayWeatherInfo,
} from "./display.js";
import { Coord } from "../interface/index.js";
import fs from "fs";

const API_KEY = "2aa8747dc962ec166dac3f5831abf7f2";
const BASE_URL = "http://api.openweathermap.org";

/**
 * @param city
 * @param country_code
 */
export async function getWeather(
  city?: string,
  country_code?: string
): Promise<void> {
  try {
    const res = await axios.get(
      `${BASE_URL}/data/2.5/weather?q=${
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
export async function getForeCastWeather(location: string): Promise<void> {
  try {
    const res = await axios.get(
      `${BASE_URL}/data/2.5/forecast?q=${location}&appid=${API_KEY}&units=metric`
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

/**
 * @param location
 */
export async function getAirQuality(location: string): Promise<void> {
  try {
    // Get the latitude and longitude for the location first
    const geoResponse = await axios.get(
      `${BASE_URL}/geo/1.0/direct?q=${location}&limit=1&appid=${API_KEY}`
    );
    const { lat, lon }: Coord = geoResponse.data[0];
    const response = await axios.get(
      `${BASE_URL}/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    );

    if (response.status !== 200) {
      throw new Error();
    }

    displayAirQuality(response);
  } catch (error) {
    console.error(chalk.red(`Could not fetch air quality data: `) + error);
  }
}

/**
 * @Note get's all the favorite locations
 */
const favoriteFile: string = "./favorite.json";
export async function getFavorites() {
  let favorites: any = [];
  if (fs.existsSync(favoriteFile)) {
    favorites = JSON.parse(fs.readFileSync(favoriteFile, "utf-8"));
    console.log(favorites);
  } else {
    console.log(chalk.yellow("No favorites location saved"));
  }
}

export async function saveFavorite(location: string): Promise<void> {
  let favorites = [];
  if (fs.existsSync(favoriteFile)) {
    favorites = JSON.parse(fs.readFileSync(favoriteFile, "utf8"));
  }
  if (!favorites.includes(location)) {
    favorites.push(location);
    fs.writeFileSync(favoriteFile, JSON.stringify(favorites, null, 2));
    console.log(`${location} added to favorites.`);
  } else {
    console.log(`${location} is already in favorites.`);
  }
}
