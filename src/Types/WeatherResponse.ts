export type WeatherRes = {
  cod: string;
  message: number;
  cnt: number;
  list: Day[];
  city: City;
};

export type City = {
  id: number;
  name: string;
  coord: Coord;
  country: string;
};

export type Coord = {
  lat: number;
  lon: number;
};

export type Day = {
  dt: number;
  main: Main;
  weather: Weather[];
  clouds: Clouds;
  wind: Wind;
  sys: Sys;
  dt_txt: string;
  rain?: Rain;
  snow?: Rain;
};

type Rain = {};

type Sys = {
  pod: string;
};

type Wind = {
  speed: number;
  deg: number;
};

type Clouds = {
  all: number;
};

type Weather = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

type Main = {
  temp: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
};
