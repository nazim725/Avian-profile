import React, { useEffect, useState } from 'react';
import Profile from './Profile/Profile';

const HiredProfile = () => {

    const [hiredProfiles, setHiredProfiles] = useState([])
    useEffect(() => {
        fetch('https://infinite-crag-63538.herokuapp.com/hiredUsers')
            .then(res => res.json())
            .then(data => {
                setHiredProfiles(data)
                console.log(data)
            })
    }, [])
    return (
        <div className="user-container">
            {
                hiredProfiles.map(profile=><Profile profile={profile} key={profile._id}></Profile>)
            }
            
        </div>
    );
};

export default HiredProfile;