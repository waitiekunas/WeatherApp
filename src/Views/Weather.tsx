import React, { FormEvent, useCallback, useEffect, useState } from 'react';

import { fetchData } from '../api/utils';
import { WeatherMainWrapper } from '../components/WeatherMainWrapper/WeatherMainWrapper';
import { getWeatherEndpoint } from '../Constants/api';
import { WeatherRes } from '../Types/WeatherResponse';

type Props = {
  weatherRes?: WeatherRes;
  handleResponse: (res: WeatherRes) => void;
  handleNoResponse: (noData: boolean) => void;
};

export const Weather: React.FC<Props> = (props) => {
  const [weather, setWeather] = useState<WeatherRes>();
  const [city, setCity] = useState<string>();
  useEffect(() => {
    setWeather(props.weatherRes);
  }, [props.weatherRes]);
  useEffect(() => {
    if (city) {
      let url = getWeatherEndpoint(city);
      fetchData(url, props.handleResponse, props.handleNoResponse);
    }
  }, [city]);
  const handleCityInput = useCallback(
    (e: FormEvent<HTMLFormElement>, city: string) => {
      e.preventDefault();
      setCity(city);
    },
    [city]
  );
  return (
    <div className="justifyCenter">
      <WeatherMainWrapper weather={weather} handleSubmit={handleCityInput} />
    </div>
  );
};
