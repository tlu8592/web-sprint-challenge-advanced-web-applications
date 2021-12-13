import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

const initialLoginFormValues = {
    username: '',
    password: ''
}

// const initialLoginFormErrors = {
//     username: '',
//     password: ''
// }

const Login = () => {
    const [formValues, setFormValues] = useState(initialLoginFormValues);
    const [error, setError] = useState('');

    const history = useHistory();

    const handleChanges = e => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/login', formValues)
            .then(res => {
                // console.log("response", res);
                localStorage.setItem('token', res.data.token);
                history.push('/view');
            })
            .catch(err => {
                console.log("error", err);
                setError('wrong username/password combination');
            });
    }
    
    return(<ComponentContainer>
        <ModalContainer>
            <h1>Welcome to Blogger Pro</h1>
            <h2>Please enter your account information.</h2>
            <FormGroup onSubmit={handleSubmit}>
                <Label>
                    Username:
                    <Input
                        id='username'
                        type='text' 
                        onChange={handleChanges}
                        name="username"
                        value={formValues.username}
                    />
                </Label>
                <Label>
                    Password:
                    <Input
                        id='password' 
                        type='password'
                        onChange={handleChanges}
                        name="password"
                        value={formValues.password}
                    />
                </Label>
                <Button id='submit'>Login</Button>
            </FormGroup>
            <div>
                <ErrorMessage id='error'>{error}</ErrorMessage>
            </div>
        </ModalContainer>
    </ComponentContainer>);
}

export default Login;

//Task List
//1. Build login form DOM from scratch, making use of styled components if needed. Make sure the username input has id="username" and the password input as id="password".
//2. Add in a p tag with the id="error" under the login form for use in error display.
//3. Add in necessary local state to support login form and error display.
//4. When login form is submitted, make an http call to the login route. Save the auth token on a successful response and redirect to view page.
//5. If the response is not successful, display an error statement. **a server provided error message can be found in ```err.response.data```**
//6. MAKE SURE TO ADD id="username", id="password", id="error" AND id="submit" TO THE APPROPRIATE DOM ELEMENTS. YOUR AUTOTESTS WILL FAIL WITHOUT THEM.

const ComponentContainer = styled.div`
    height: 70%;
    justify-content: center;
    align-items: center;
    display:flex;
`

const ModalContainer = styled.div`
    width: 500px;
    background: white;
    padding: 2rem;
    text-align: center;
`

const Label = styled.label`
    display: block;
    text-align: left;
    font-size: 1.5rem;
    margin-bottom: 1rem;
`

const FormGroup = styled.form`
    padding:1rem;
`

const Input = styled.input`
    font-size: 1rem;
    padding: 1rem 0;
    width:100%;
`

const Button = styled.button`
    padding:1rem;
    width: 100%;
    font-size: 1.5rem;
    margin-top: 20px;
`

const ErrorMessage = styled.p`
    color: red;
    font-size: 2rem;
`
