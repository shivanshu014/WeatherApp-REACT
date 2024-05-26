import { useState } from 'react'
import InfoBox from './InfoBox'
import SearchBox from './SearchBox'

export default function WeatherApp() {  
let [weatherInfo, setWeatherInfo] = useState({
    city: "wanderland",
    weather: "haze",
    feels_like: 42.79,
    humidity: 29,
    temp: 40.05,
    temp_max: 40.05,
    temp_min: 40.05,
});

let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
}

    return(
        <div style={{textAlign: "center"}}>
            <h1>Weather App By React</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}