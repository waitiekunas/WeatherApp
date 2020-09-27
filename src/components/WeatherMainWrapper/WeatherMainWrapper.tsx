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
    const week = getWeek(weather?.list);

    setFilteredWeek(week);
  }, [weather]);

  const getWeek = (days?: Day[]): Day[] => {
    let week: Day[] = [];
    if (weather && days)
      days.forEach((day, index) => {
        if (week.length === 0) {
          week.push(day);
        }
        if (areNotDaysAndTimes(week[week.length - 1].dt_txt, day.dt_txt)) {
          week.push(day);
        }
        if (week.length === 5) {
          week.push(days[days.length - 1]);
        }
      });
    return week;
  };

  const areNotDaysAndTimes = (includedDay: string, newDay: string): boolean => {
    const includedDate = new Date(includedDay);
    const newDate = new Date(newDay);
    const includedDayNo = includedDate.getDay();
    const newDateDayNo = newDate.getDay();
    const includedHour = includedDate.getHours();
    const newDateHour = newDate.getHours();

    return includedDayNo !== newDateDayNo && includedHour === newDateHour;
  };

  return (
    <div className="FlexColumn margin16px widthFitContent">
      <WeatherTableHeader city={weather?.city} handleSubmit={handleSubmit} />
      <div className="spaceBetween">
        <CurrentDayInfo weather={weather?.list[0]} />
        <div className="margin16px">
          <div className="flex">
            {filteredWeek?.map((day, index) => (
              <WeekDay key={index} weather={day} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
