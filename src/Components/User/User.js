import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const User = (props) => {
    const {name,email,phone,city,picture,location}=props.user
    const [save,setSave]=React.useState('false')
    const imgRef = React.useRef();
    const nameRef = React.useRef();
    const emailRef = React.useRef();
    const phoneRef = React.useRef();
    const cityRef = React.useRef();
  


    const handleAddHiredUser = ()=> {
       

        const name = nameRef.current.innerText;
        const img = document.getElementById("imageid").src;
        const email = emailRef.current.innerText;
        const phone = phoneRef.current.innerText;
        const city = cityRef.current.innerText;
         const status='Hired'
        const newUser = { name, img, email,phone,city,status}


        fetch('http://localhost:5000/hiredUsers', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully Hired.')
                    setSave(true)
                    window.location.reload(false);
                   
                }
            })
        
    }
    return (
        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
      
       <div ref={imgRef}>
        <img id="imageid" src={picture.large} alt="" />
       </div>
        <CardContent>
          <Typography ref={nameRef} gutterBottom variant="h5" component="div">
           {name.title} {name.first} {name.last}
          </Typography>
          <Typography ref={emailRef} variant="h6" color="text.secondary">
           {email}
          </Typography>
          <Typography ref={phoneRef} variant="h6" color="text.secondary">
           {phone}
          </Typography>
          <Typography  ref={cityRef}variant="h6" color="text.secondary">
           {location.city}
          </Typography>

          <button onClick={handleAddHiredUser}>{ !save ? 'Hired':'Hire'}</button>
        </CardContent>
      </CardActionArea>
    </Card>
    );
};

export default User;