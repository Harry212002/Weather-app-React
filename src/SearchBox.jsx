import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';

export default function SearchBox({updateInfo})
{
    const [city,setCity]=useState("");
    const [error,seterror]=useState(false);
    const API_URL="https://api.openweathermap.org/data/2.5/weather"
    const API_KEY="84b70c74ea733188a3df5dfea02f1264";
    let getwheatherinfo=async()=>{
        try{
            let response= await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse= await  response.json();
         let result={
            city:city,
            temperature: jsonResponse.main.temp,
            mintemp: jsonResponse.main.temp_min,
            maxtemp: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feel_like: jsonResponse.main.feels_like,
            wheather: jsonResponse.weather[0].description,
        }
        console.log(result);
        return result;
    }catch(err){
           throw err;
    }
        
    };
    
    let handleChnage=(event)=>{
        setCity(event.target.value);
    }
    let handleSubmit=async (event)=>{
        try{event.preventDefault();
            console.log(city);
            setCity("");
           let newInfo= await getwheatherinfo();
           updateInfo(newInfo);
        }catch(err){
              seterror(true)
        }
            
    }
    return(
        <div className='searchBox'>
            <form onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChnage}/>
            <br></br><br></br>
            <Button variant="contained" type='submit' >
               Send
            </Button>
            {error && <p style={{color:"red"}}>no such place exists</p>}
            </form>
        </div>
    )
}