import axios from 'axios';
import React, { useEffect } from 'react';

const Logout = () => {
    useEffect(() => {
        axios.post('http://localhost:5000/api/logout', {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
            .then(res => {
                localStorage.removeItem('token');
                window.location.href = '/login';
            })
            .catch(err => console.log(err))
    }); 
    
    return(<div>Logged out successfully!</div>);
}

export default Logout;

// Task List
// 1. On mount, execute a http request to the logout endpoint.
// 2. On a successful request, remove the token from localStorage and redirect to the login page.