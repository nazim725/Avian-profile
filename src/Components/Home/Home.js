import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import User from '../User/User';
import './User.css'

const Home = () => {

    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('https://randomuser.me/api//?results=8')
            .then(res => res.json())
            .then(data => {
                setUsers(data.results)
                console.log(data.results)
            })
    }, [])
    return (
        <div >
            
            <div className="user-container">
                {
                   users.map(user=><User user={user}></User>)
                }
            </div>

            <div style={{display:'flex',justifyContent:'center',margin:'18px 0',}}>
            <NavLink style={{textDecoration:'none'}} to="/hiredProfile"> <Button  variant="contained">Hired Employee</Button></NavLink>
            </div>


        </div> 
    );
};

export default Home;