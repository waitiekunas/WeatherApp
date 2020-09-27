const API_KEY = "e88592f2073218d947229dbcb94a5885";

export const getWeatherEndpoint = (city: string) =>
  `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`;

export const getImage = (id?: string) =>
  `http://openweathermap.org/img/w/${id}.png`;
export const getWeatherEndpointCord = (lat: string, lon: string) =>
  `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;
