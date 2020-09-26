import React from 'react';

import { getImage } from '../../Constants/api';
import { months, weekDays } from '../../Constants/date';
import { Day } from '../../Types/WeatherResponse';

type Props = {
  weather?: Day;
};
export const WeekDay: React.FC<Props> = ({ weather }) => {
  const date = weather ? new Date(weather.dt_txt) : new Date();
  return (
    <div className="day">
      <div className="row">{weekDays[date.getDay()]}</div>
      <div className="row">{`${date.getUTCDate()} ${
        months[date.getMonth()]
      }`}</div>
      <div className="img">
        <img src={getImage(weather?.weather[0].icon)} />
      </div>
      <div className="row">Max:</div>
      <div className="row">{weather?.main.temp_max}</div>
      <div className="row">Min:</div>
      <div className="row">{weather?.main.temp_min}</div>
    </div>
  );
};
