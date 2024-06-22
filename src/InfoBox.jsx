import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
export default function InfoBox({info}){
    let INT_URL="https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    

    return(
        <div>
            <h1>Wheather Info</h1>
            <div id='card'>
            <Card sx={{ maxWidth: 345 }}>
             <CardMedia
               sx={{ height: 140 }}
               image={INT_URL}
              title="green iguana"
            />
           <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {info.city}
             </Typography>
             <Typography variant="body2" color="text.secondary" component={"span"}>
              <p>temeprature={info.temperature}&deg;C</p>
              <p>mintemp={info.mintemp}&deg;C</p>
              <p>maxtemp={info.maxtemp}&deg;C</p>
              <p>humidity={info.humidity}</p>
              <p>a weather can  be described as <i>{info.wheather}</i> and feels Like a {info.feel_like}&deg;C</p>
            </Typography>
          </CardContent>      
        </Card>
         </div>
       </div>
    )
}