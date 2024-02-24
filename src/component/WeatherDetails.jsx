import React, { useState } from 'react';
import Style from './WeatherStyle'
import sun from '../assets/sun.png';
import cloudy from '../assets/cloudy.png';
import cloud from '../assets/cloud.png';
import wind from '../assets/wind.png';
import snow from '../assets/snow.png';

const WeatherDetails = () => {

    const [icon, setIcon] = useState(snow);
    const [temp, setTemp] = useState(0);
    const [city, setCity] = useState("chennai");
    const [country, setCountry] = useState("IN");
    const [lat, setLat] = useState(0);
    const [log, setLog] = useState(0);
    const [windEl, setWindEl] = useState(0);
    const [humidity, setHumidity] = useState(0);

    return (
        <>
            <Style.ImageDiv>
                <Style.Image src={icon} alt="image" />
            </Style.ImageDiv>
            <Style.Temp>{temp}°C</Style.Temp>
            <Style.City>{city}</Style.City>
            <Style.Country>{country}</Style.Country>
            <Style.Cord>
                <Style.LatLog>
                    <Style.LatLogSpan>latitude</Style.LatLogSpan>
                    <Style.LatLogSpan>{lat}</Style.LatLogSpan>
                </Style.LatLog>
                <Style.LatLog>
                    <Style.LatLogSpan>longitude</Style.LatLogSpan>
                    <Style.LatLogSpan>{log}</Style.LatLogSpan>
                </Style.LatLog>
            </Style.Cord>
            <Style.DataContainer>
                <Style.Element>
                    <img src={cloud} alt="humidity" width={70} />
                    <div>
                        <div>{humidity} %</div>
                        <Style.TextEL>Humidity</Style.TextEL>
                    </div>
                </Style.Element>
                <Style.Element>
                    <img src={wind} alt="wind" width={70} />
                    <div>
                        <div>{windEl} km/h</div>
                        <Style.TextEL>Wind Speed</Style.TextEL>
                    </div>
                </Style.Element>
            </Style.DataContainer>
        </>
    )
}

export default WeatherDetails;