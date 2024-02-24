import { IconButton, InputBase } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import WeatherDetails from './component/WeatherDetails';
import MainStyle from './component/MainStyle';

import clearIcon from './assets/sun.png';
import drizzleIcon from './assets/cloudy.png';
import snow from './assets/snow.png';
import rainIcon from './assets/rain.png';
import styled from 'styled-components';


const ErrHandle = styled.div`
  margin-top:10px;
  color:lightgray;
  font-size:20px;
  font-weight:400;
  text-align:center;
`;

const App = () => {

  const apiId = import.meta.env.VITE_API_ID;

  const [text, setText] = useState('Madurai');

  const [icon, setIcon] = useState(snow);
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [lat, setLat] = useState(0);
  const [log, setLog] = useState(0);
  const [windEl, setWindEl] = useState(0);
  const [humidity, setHumidity] = useState(0);

  const [cityNotFound, setCityNotFound] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const weatherIconMap = {
    "01d": clearIcon,
    "01n": clearIcon,
    "02d": clearIcon,
    "02n": clearIcon,
    "03d": drizzleIcon,
    "03n": drizzleIcon,
    "04d": drizzleIcon,
    "04n": drizzleIcon,
    "09d": rainIcon,
    "09n": rainIcon,
    "010d": rainIcon,
    "010n": rainIcon,
    "013d": snow,
    "013n": snow,
  }

  const search = async () => {
    setLoading(true);
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${apiId}&units=Metric`;
    try {
      let res = await fetch(url);
      let data = await res.json();

      if (data.cod === "404") {
        console.log("City not found");
        setCityNotFound(true);
        setLoading(false);
        return;
      }

      setHumidity(data.main.humidity);
      setWindEl(data.wind.speed);
      setTemp(Math.floor(data.main.temp));
      setCity(data.name);
      setCountry(data.sys.country);
      setLat(data.coord.lat);
      setLog(data.coord.lon);
      setCityNotFound(false);
      const weatherIconCode = data.weather[0].icon;
      setIcon(weatherIconMap[weatherIconCode] || clearIcon);


    } catch (err) {
      console.error("An error occurred:", err.message);
      setError("An error occurred while fetching weather data.");
    } finally {
      setLoading(false);
    }
  }

  const handleCity = (e) => {
    setText(e.target.value);
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      search();
    }
  }

  useEffect(() => {
    search()
  }, [])

  return (
    <MainStyle.Main>
      <MainStyle.InnerDiv>
        <MainStyle.InputContainer>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search City"
            inputProps={{ 'aria-label': 'search city' }}
            onChange={handleCity}
            value={text}
            onKeyDown={handleKeyDown}
          />
          <IconButton onClick={() => search()} type="button" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </MainStyle.InputContainer>
        <WeatherDetails icon={icon} temp={temp} city={city} country={country} lat={lat} log={log} windEl={windEl} humidity={humidity} />

        {loading && <ErrHandle>Loading...</ErrHandle>}
        {error && <ErrHandle>{error}</ErrHandle>}
        {cityNotFound && <ErrHandle>City not found!</ErrHandle>}

        <MainStyle.CopyrightEl>Designed by <span>Vivekananthan</span></MainStyle.CopyrightEl>
      </MainStyle.InnerDiv>
    </MainStyle.Main>
  )
}

export default App
