import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import Profile from './Profile/Profile';

const HiredProfile = () => {
    const {user,logout}=useAuth()

    const [hiredProfiles, setHiredProfiles] = useState([])
    useEffect(() => {
        fetch('https://infinite-crag-63538.herokuapp.com/hiredUsers')
            .then(res => res.json())
            .then(data => {
                setHiredProfiles(data)
                console.log(data)
            })
    }, [])


    const handleDeleteProfile = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = ` https://infinite-crag-63538.herokuapp.com/hiredUsers/${id}`;

            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingProfile = hiredProfiles.filter(profile => profile._id !== id);
                        setHiredProfiles(remainingProfile);
                    }
                });
        }
    }
    return (
        <div>
             {user ? <Button onClick={logout}> Logout</Button> :<link to="/login">Login</link>}
        <div className="user-container">
           
            
            {
                hiredProfiles.map(profile=><Profile profile={profile} key={profile._id} handleDeleteProfile={handleDeleteProfile}></Profile>)
            }
            
        </div>

        </div>
    );
};

export default HiredProfile;