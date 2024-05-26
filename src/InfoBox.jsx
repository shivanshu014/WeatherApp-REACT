import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import "./InfoBox.css";

import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}) {
    let RAIN_URL = "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=1024x1024&w=is&k=20&c=U6uwI27fEfgEAl9j_Hz848FgLRidd9Ww0kPCkc0FZB8=";
    let SUNNY_URL = "https://media.istockphoto.com/id/1150050227/photo/heat-wave-of-extreme-sun-and-sky-background-hot-weather-with-global-warming-concept.jpg?s=612x612&w=0&k=20&c=EjBSIEDX39FRrARa7xiZyJtoXdgl3mePScIEQq9iW1U=";
    let WINTER_URL = "https://media.istockphoto.com/id/1413872640/photo/beautiful-winter-christmas-scenic-background-with-space-for-text.jpg?s=612x612&w=0&k=20&c=LBuxGQLvyG93r2rcAQ8eN4qlTr-eLQKI_NqCv2Juv-0=";

    return (
        <div className="InfoBox">
            <div className='CardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={info.humidity > 80 ? RAIN_URL : info.temp < 15 ? WINTER_URL : SUNNY_URL}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {info.city}
                                {info.humidity > 80 ? <ThunderstormIcon/> : info.temp < 15 ? <AcUnitIcon/> : <WbSunnyIcon/>}
                                
                            </Typography>
                            <Typography variant="body2" color="text.secondary" component={"span"}>
                                <p>Temperature = {info.temp}&deg;C</p>
                                <p>Humadity = {info.humidity}</p>
                                <p>Max Temp = {info.temp_max}&deg;C</p>
                                <p>Min Temp = {info.temp_min}&deg;C</p>
                                <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feels_like}&deg;C</p>

                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </div>
    )
}