export interface Description {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

export interface Coord {
  lon: number;
  lat: number;
}

export interface Wind {
  speed: number;
  deg: number;
}

export interface ApiResponseInterface {
  weather: Array<Description>;
  main: Main;
  wind: Wind;
  coord: Coord;
  name: string;
  timezone: number;
  visibility: number;
  dt_txt?: string;
}
