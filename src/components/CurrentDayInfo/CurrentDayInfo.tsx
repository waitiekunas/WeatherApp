import React from 'react';

import { getImage } from '../../Constants/api';
import { Day } from '../../Types/WeatherResponse';

type Props = {
  weather?: Day;
};
export const CurrentDayInfo: React.FC<Props> = ({ weather }) => {
  return (
    <div className="DayInfo">
      <div className="firstHalf">
        <div className="img">
          <img src={getImage(weather?.weather[0].icon)} />
        </div>
        <div className="temp">{`${weather?.main.temp} `}&#8451;</div>
      </div>
      <div>
        <div className="row">{weather?.weather[0].description}</div>
        <div className="row">{`Wind: ${weather?.wind.speed} m/s`}</div>
      </div>
    </div>
  );
};
