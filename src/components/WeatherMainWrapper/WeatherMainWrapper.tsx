import React, { FormEvent, useEffect, useState } from 'react';

import { Day, WeatherRes } from '../../Types/WeatherResponse';
import { CurrentDayInfo } from '../CurrentDayInfo/CurrentDayInfo';
import { WeatherTableHeader } from '../WeatherTableHeader/WeatherTableHeader';
import { WeekDay } from '../WeekDay/WeekDay';

type Props = {
  weather?: WeatherRes;
  handleSubmit: (e: FormEvent<HTMLFormElement>, input: string) => any;
};
export const WeatherMainWrapper: React.FC<Props> = ({
  weather,
  handleSubmit,
}) => {
  const [filteredWeek, setFilteredWeek] = useState<Day[]>();
  useEffect(() => {
    let week = getWeek(weather?.list);
    setFilteredWeek(week);
  }, [weather]);
  const getWeek = (days?: Day[]): Day[] => {
    let week: Day[] = [];
    if (weather && days)
      for (let i = 0; i <= days.length; i += 8) {
        week.push(days[i]);
      }
    return week;
  };
  return (
    <div className="FlexColumn">
      <WeatherTableHeader city={weather?.city} handleSubmit={handleSubmit} />
      <div className="FlexRow">
        <CurrentDayInfo weather={weather?.list[0]} />
        <div className="weekContainer">
          <div className="week">
            {filteredWeek?.map((day, index) => (
              <WeekDay key={index} weather={day} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
