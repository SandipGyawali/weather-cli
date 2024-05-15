# weather-cli

Check the weather from your terminal

### Install

```shell
$ clone the repo
$ yarn install
$ npm link
```

```shell
$ Note: Create an account in the openweather and use the api key from the profile that you get.
```

```shell
$ weather --help

  Options:
  -V, --version                  output the version number
  -h, --help                     display help for command

Commands:
  current <location>             display the current weather data based on the city passed
                                 Example: weather current location

  forecast [options] <location>  list of weather forecast data for the provided location
                                 Example: weather forecast location

  air-quality <location>         display the air-quality of the location  that we define
                                 Example: weather air-quality location

  favorites                      List all the favorite locations
                                 Example: weather favorites

  add-favorite <location>        Add a location to favorite
                                 Example: weather favorites nepal

  help [command]                 display help for command


  Examples
    $ weather current Nepal
    result:
    {
      temperature: '22.18 deg',
      Humidity: '59%',
      Pressure: '1012hPa',
      Wind_Speed: '2.08m/s',
      description: 'broken clouds',
      coordinate: { lon: 84, lat: 28 },
      timezone: 20700,
      visibility: 10000
    }


    $ weather air-quality Nepal
    result:
    {
      AQI: 4,
      PM2_5: 42.12,
      PM10: 65.05,
      O3: 141.62
    }
```

### License

Licensed under MIT. See [LICENSE](LICENSE) for more information.

### Issues

Report a bug in issues.

Made by [Sandip Gyawali](https://github.com/SandipGyawali)
