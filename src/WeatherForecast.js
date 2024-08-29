import React, { useState, useEffect } from 'react';
import './WeatherForecast.css';
import axios from 'axios';
import WeatherForecastDay from './WeatherForecastDay';

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    // UseEffect is used to change something after the component loads

    // Translate the following (2) lines into code >>> 
    // If the coordinates change
    // Set loaded false

    useEffect(() => {
        // Set loaded false
        setLoaded(false);
        // If the coordinates change
      }, [props.coordinates]);

      // Whenever props.coordinates change, call setLoaded 
      // Or whenever the coordinates are changing, then 
      // I want you to set the variable loaded to false
      // Because we change the state it's going to re-render from line 31 to line 58
      // Updating the app component with new data. 
      // We need to use useState because a property change doesn't trigger the re-rendering of a react component
      // So whenever the property coordinates change, then please use useEffect.

    function handleResponse(response) {
       setForecast(response.data.daily);
       setLoaded(true);
    }

    function load() {
        let apiKey = '53f3bc1f5d348c44be3e3754c7185573';
        let longitude = props.coordinates.lon;
        let latitude = props.coordinates.lat; 
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    
        axios.get(apiUrl).then(handleResponse);
    }

    if (loaded) {
        console.log(forecast);
        return (
            <div className='WeatherForecast'>
              <div className='row'>
                {forecast.map(function(dailyForecast, index) {
                    if (index < 5) {
                  return (
                    <div className='col' key={index}>
                    <WeatherForecastDay data={dailyForecast} />
                   </div>
                  );
                } else {
                  return null;
                }
                })}
             </div>
          </div>
        );
    } else {
      load();

      return null;
    }
}
