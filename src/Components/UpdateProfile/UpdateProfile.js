import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const UpdateProfile = () => {

    const { profileId } = useParams();
    const [profile, setProfile] = useState({});

    const url = `https://infinite-crag-63538.herokuapp.com/hiredUsers/${profileId}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProfile(data)
            })
    }, [])


    const handleUpdateProfile = e => {
        const url = `https://infinite-crag-63538.herokuapp.com/hiredUsers/${profileId}`;
        console.log(url)
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(profile)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Update Successful');
                    setProfile({});

                }
            })
        e.preventDefault();
    }


    const handleNameChange = e => {
        const updatedName = e.target.value;
        const updatedProfile = { name: updatedName, email: profile.email, img: profile.img, phone: profile.phone,city:profile.city };
        setProfile(updatedProfile)
    }
    const handleEmailChange = e => {
        const updateEmail= e.target.value;
        const updatedProfile =  { name: profile.name, email: updateEmail, img: profile.img, phone: profile.phone,city:profile.city };
        setProfile(updatedProfile)
    }

    const handleImgChange = e => {
        const updateImg = e.target.value;
        const updatedProfile =  { name: profile.name, email: profile.email, img: updateImg, phone: profile.phone,city:profile.city };
        setProfile(updatedProfile)
    }
    const handlePhoneChange = e => {
        const updatePhone = e.target.value;
        const updatedProfile = { name: profile.name, email: profile.email, img: profile.img, phone: updatePhone,city:profile.city};
        setProfile(updatedProfile)
    }
    const handleCityChange = e => {
        const updateCity = e.target.value;
        const updatedProfile = { name: profile.name, email: profile.email, img: profile.img, phone: profile.phone,city:updateCity};
        setProfile(updatedProfile)
    }

    return (
        <div >
            <Box>
                <Typography className="login-heading" id="transition-modal-title" variant="h4" component="h2">
                    Edit profile
                </Typography>
                <img src={profile.img} alt="" />

                <form onSubmit={handleUpdateProfile}>
                    <TextField
                        sx={{ width: '90%', m: 1, input: { color: 'blue' } }}
                        
                        id="outlined-password-input"
                        name="name"
                        onChange={handleNameChange}
                        value={profile.name || ''}
                        className='input-field'
                        required

                    />
                    <TextField
                        sx={{ width: '90%', m: 1, input: { color: 'blue' }}}
                        id="outlined-size-small"
                        name="email"
                        onChange={handleEmailChange}
                        value={profile.email || ''}
                        className='input-field'
                        size="small"
                    />
                    <TextField
                        sx={{ width: '90%', m: 1,input: { color: 'blue' } }}
                        id="outlined-size-small"
                        name="img"
                        onChange={handleImgChange}
                        value={profile.img || ''}
                        className='input-field'
                        size="small"
                    />
                    <TextField
                        sx={{ width: '90%', m: 1,input: { color: 'blue' } }}
                        id="outlined-size-small"
                        name="phone"
                        onChange={handlePhoneChange}
                        value={profile.phone || ''}
                        size="small"
                        className='input-field'
                    />
                    <TextField
                        sx={{ width: '90%', m: 1,input: { color: 'blue' } }}
                        id="outlined-size-small"
                        name="city"
                        onChange={handleCityChange}
                        value={profile.city || ''}
                        size="small"
                        className='input-field'
                    />
                    <Button sx={{ width: '90%', m: 1 }} type="submit" variant="contained">Edit</Button>
                </form>
            </Box>

        </div>
    );
};

export default UpdateProfile;