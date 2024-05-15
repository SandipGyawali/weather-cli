#!/usr/bin/env node

import { Command } from "commander";
import { getForeCastWeather, getWeather } from "./methods/getWeather.js";

const program = new Command();

program
  .name("weather-cli")
  .description("Cli tool for weather data")
  .version("1.0.0");

program
  .command("current")
  .argument("<location>", "string to log")
  .description(
    "display the current weather data based on the city passed\nExample: weather country_name"
  )
  .action(function (param: string) {
    getWeather(param);
  });

program
  .command("forecast <location>")
  .description(`5-day weather forecast for the provided location`)
  .action(async (location: string) => {
    getForeCastWeather(location);
  });

program.parse(process.argv);
