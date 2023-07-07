import React, { useState, useEffect } from 'react';

const WeatherDisplay = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiKey='7ee659f0038341c8b23121924230707';
  const city='London';
  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`);
        console.log(response);
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setWeatherData(data);
        } else {
          setError('Failed to fetch weather data');
        }
        setLoading(false);
      } catch (error) {
        setError('An error occurred');
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className='error'>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Weather</h2>
      {weatherData && (
        <div className='wp'>
          <p>Temperature: {weatherData?.current?.temp_c}</p>
          <p>Description: {weatherData?.current?.condition?.text}</p>
          <img src={weatherData?.current?.condition?.icon} alt="Weather Icon" />
        </div>
      )}
    </div>
  );
};

export default WeatherDisplay;
