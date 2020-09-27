import React, { FormEvent, useCallback, useEffect, useState } from 'react';

import { fetchData } from '../api/utils';
import { Form } from '../components/Form/Form';
import { getWeatherEndpoint, getWeatherEndpointCord } from '../Constants/api';
import { WeatherRes } from '../Types/WeatherResponse';

type Props = {
  handleResponse: (res: WeatherRes) => void;
  handleNoResponse: (noData: boolean) => void;
  lat: number | undefined;
  lon: number | undefined;
};
export const Welcome: React.FC<Props> = (props) => {
  const [city, setCity] = useState<string>();
  const [useCord, setUseCord] = useState<boolean>(false);

  useEffect(() => {
    if (city) {
      let url = getWeatherEndpoint(city);
      fetchData(url, props.handleResponse, props.handleNoResponse);
    }
  }, [city]);
  useEffect(() => {
    if (props.lat && props.lon && useCord) {
      let url = getWeatherEndpointCord(
        props.lat?.toString(),
        props.lon?.toString()
      );
      fetchData(url, props.handleResponse, props.handleNoResponse);
    }
  }, [useCord]);
  const handlePosition = () => {
    setUseCord(true);
  };
  const handleCityInput = useCallback(
    (e: FormEvent<HTMLFormElement>, city: string) => {
      e.preventDefault();
      setCity(city);
    },
    [city]
  );
  return (
    <div className="centerScreen">
      <Form handleSubmit={handleCityInput} classNames="formColumn" />
      {props.lon && props.lat && (
        <div>
          <p>Or use your location</p>
          <button className="button" onClick={handlePosition}>
            Use my location
          </button>
        </div>
      )}
    </div>
  );
};
