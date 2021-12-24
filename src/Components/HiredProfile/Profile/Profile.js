import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Profile = (props) => {
    const { name, phone, email, img, _id ,city} = props.profile
    return (
        <>
            <Card className="service-card" sx={{ maxWidth: 345, maxHeight: 500, pb: 4 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={img}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                            {email}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {phone}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {city}
                        </Typography>
                    </CardContent>
                    <Link style={{ textDecoration: 'none' }} to={`/updateProfile/${_id}`}><Button variant="contained">Edit Profile</Button></Link>

                </CardActionArea>
            </Card>


        </>
    );
};

export default Profile;