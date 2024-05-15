import chalk from "chalk";
import { ApiResponseInterface } from "../interface/index.js";

/**
 * @param response
 * display the response data from the api
 */
export function displayWeatherInfo(response: ApiResponseInterface) {
  //extract the weather info from the response object
  const description: string = response?.weather[0]?.description;
  const temperature: number = response?.main?.temp;
  const humidity: number = response?.main?.humidity;
  const pressure: number = response?.main?.pressure;
  const wind_speed: number = response?.wind?.speed;
  const coordinate: { lon: number; lat: number } = response?.coord;
  const timezone: number = response?.timezone;
  const visibility: number = response?.visibility;

  const result = {
    temperature: temperature + " deg",
    Humidity: humidity + "%",
    Pressure: pressure + "hPa",
    Wind_Speed: wind_speed + "m/s",
    description: description,
    coordinate,
    timezone,
    visibility,
  };

  console.log(result);
}

/**
 *
 * @param response: Array[]
 */
export function displayForeCastInfo(response: Array<ApiResponseInterface>) {
  const all: Array<Object> = response.map((response) => {
    const description: string = response?.weather[0]?.description;
    const temperature: number = response?.main?.temp;
    const humidity: number = response?.main?.humidity;
    const pressure: number = response?.main?.pressure;
    const wind_speed: number = response?.wind?.speed;
    const visibility: number = response?.visibility;
    const dt_txt: any = response?.dt_txt;

    return {
      temperature: temperature + " deg",
      Humidity: humidity + "%",
      Pressure: pressure + "hPa",
      Wind_Speed: wind_speed + "m/s",
      description: description,
      visibility,
      dt_txt,
    };
  });

  console.log(all);
}

export function displayAirQuality(response: any): void {
  if (!response || response == null) {
    console.log(chalk.red("Response cannot be empty in displayAirQuality"));
    return;
  }

  const { main, components } = response.data.list[0];

  const AQI: number = main?.aqi;
  const PM2_5: number = components?.pm2_5;
  const PM10: number = components?.pm10;
  const O3: number = components?.o3;

  const result: {
    AQI: number;
    PM2_5: number;
    PM10: number;
    O3: number;
  } = {
    AQI,
    PM2_5,
    PM10,
    O3,
  };

  console.log(result);
}
