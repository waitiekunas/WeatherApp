import React, { FormEvent, useCallback, useEffect, useState } from 'react';

import { fetchData } from '../api/utils';
import { Form } from '../components/Form/Form';
import { getWeatherEndpoint } from '../Constants/api';
import { WeatherRes } from '../Types/WeatherResponse';

type Props = {
  handleResponse: (res: WeatherRes) => void;
  handleNoResponse: (noData: boolean) => void;
};
export const Welcome: React.FC<Props> = (props) => {
  const [city, setCity] = useState<string>();
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
    <div>
      <Form handleSubmit={handleCityInput} classNames="formColumn CenterView" />
    </div>
  );
};
