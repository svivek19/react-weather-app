import React, { useState } from 'react';
import Style from './WeatherStyle'
import cloud from '../assets/cloud.png';
import wind from '../assets/wind.png';


const WeatherDetails = ({ icon, temp, city, country, lat, log, windEl, humidity }) => {


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