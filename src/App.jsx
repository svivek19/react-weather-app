import { IconButton, InputBase } from '@mui/material';
import React, { useState } from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import Sun from './assets/sun.png';
import cloudy from './assets/cloudy.png';
import cloud from './assets/cloud.png';
import wind from './assets/wind.png';
import Snow from './assets/snow.png';

const Main = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  width:100vw;
  height:100vh;
`;

const InnerDiv = styled.div`
  background-color:transparent;
  backdrop-filter:blur(10px);
  padding:20px;
  `;

const InputContainer = styled.div`
  background-color:#fff;
  border-radius:5px;
  `;

const ImageDiv = styled.div`
  text-align:center;
  height:150px; 
  margin-top:10px;
  margin-bottom:10px;
  `;

const Image = styled.img`
  width:160px;
  height:160px;
`;

const Temp = styled.div`
  margin-top:10px;
  font-size:35px;
  color: #fff;
  text-transform:uppercase;
  text-align:center;
  font-weight:500;
`;

const City = styled(Temp)`
  color:yellow;
  font-weight:400;
  font-size:40px;
`;

const Country = styled(City)`
  color:lightgray;
  font-weight:600;
  font-size:18px;
`;

const Cord = styled.div`
  display:flex;
  justify-content:center;
  align-item:center;
  gap:10px;
  margin-top:10px;
  text-align:center;
`;

const Lat = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-item:center;
  padding:10px;
`;

const Log = styled(Lat)`

`;

const LatSpan = styled.span`
  font-weight:bold;
  color:lightgray;
  font-size:18px;
  padding:5px;
`;

const LogSpan = styled(LatSpan)`
  
`;



const WeatherDetails = ({ icon, temp, city, country, lat, log }) => {
  return (
    <>
      <ImageDiv>
        <Image src={icon} alt="image" />
      </ImageDiv>
      <Temp>{temp}°C</Temp>
      <City>{city}</City>
      <Country>{country}</Country>
      <Cord>
        <Lat>
          <LatSpan>latitude</LatSpan>
          <LatSpan>{lat}</LatSpan>
        </Lat>
        <Log>
          <LogSpan>longitude</LogSpan>
          <LogSpan>{log}</LogSpan>
        </Log>
      </Cord>
    </>
  )
}

const App = () => {

  const [icon, setIcon] = useState(Snow);
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("chennai");
  const [country, setCountry] = useState("IN");
  const [lat, setLat] = useState(0);
  const [log, setLog] = useState(0);

  return (
    <Main>
      <InnerDiv>
        <InputContainer>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search City"
            inputProps={{ 'aria-label': 'search google maps' }}
          />
          <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </InputContainer>
        <WeatherDetails icon={icon} temp={temp} city={city} country={country} lat={lat} log={log} />
      </InnerDiv>
    </Main>
  )
}

export default App
