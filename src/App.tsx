import './App.scss';
import './styles/style.scss';

import React, { useCallback, useEffect, useState } from 'react';
import { usePosition } from 'use-position';

import { NoCityError } from './components/NoCityError/NoCityError';
import { WeatherRes } from './Types/WeatherResponse';
import { Weather } from './Views/Weather';
import { Welcome } from './Views/Welcome';

function App() {
  const [showWeatherSection, setShowWeatherSection] = useState<boolean>(false);
  const [weatherResponse, setWeatherResponse] = useState<WeatherRes>();
  const [noCityError, setNoCityError] = useState<boolean>(false);
  const { latitude, longitude } = usePosition(true);
  const handleWeatherRes = useCallback(
    (res: WeatherRes) => {
      setWeatherResponse(res);
      setShowWeatherSection(true);
    },
    [weatherResponse, showWeatherSection]
  );
  const handleNoCity = useCallback(
    (noData: boolean) => {
      setNoCityError(noData);
    },
    [noCityError]
  );
  return (
    <div className="App">
      {showWeatherSection ? (
        <Weather
          weatherRes={weatherResponse}
          handleResponse={handleWeatherRes}
          handleNoResponse={handleNoCity}
        />
      ) : (
        <Welcome
          handleResponse={handleWeatherRes}
          handleNoResponse={handleNoCity}
          lat={latitude}
          lon={longitude}
        />
      )}
      {noCityError && <NoCityError handleClick={handleNoCity} />}
    </div>
  );
}

export default App;
