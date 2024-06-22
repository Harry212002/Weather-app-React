
import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from 'react'
export default function WeatherApp()
{
    const[weatherInfo,setweatherInfo]=useState({
            city:"Solapur",
            feel_like: 50,
            temperature: 24.2,
            mintemp: 23.22,
            maxtemp:24.50,
            humidity:47, 
            wheather: "haze"
    });

    let updateInfo=(newInfo)=>{
        setweatherInfo(newInfo)
    }
    return(
    <div style={{textAlign:"center"}}>
        <h1>Weather app By Harry</h1>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
    </div>
    )
}