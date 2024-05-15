#!/usr/bin/env node

import { Command } from "commander";
import {
  getAirQuality,
  getForeCastWeather,
  getWeather,
} from "./methods/getWeather.js";

const program = new Command();

program
  .name("weather-cli")
  .description("Cli tool for weather data")
  .version("1.0.0");

program
  .command("current")
  .argument("<location>", "string to log")
  .description(
    "display the current weather data based on the city passed\nExample: weather current location"
  )
  .action(function (param: string) {
    getWeather(param);
  });

program
  .command("forecast <location>")
  .description(
    `list of weather forecast data for the provided location\nExample: weather forecast location`
  )
  .option(
    "-u, --units <units>",
    "Units of measurement (standard, metric, imperial)",
    "metric"
  )
  .action(async (location: string) => {
    getForeCastWeather(location);
  });

program
  .command("air-quality")
  .argument("<location>", "location of the place city or country")
  .description(
    "display the air-quality of the location that we define\nExample: weather air-quality location"
  )
  .action(function (location: string) {
    getAirQuality(location);
  });

program.parse(process.argv);
