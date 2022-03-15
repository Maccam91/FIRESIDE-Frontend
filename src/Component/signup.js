import axios from 'axios'
import React, { useEffect,useState } from 'react'
import {useNavigate} from 'react-router-dom'

function SignUpPage(){
    const navigate = useNavigate();
    function onClick(){
        navigate('/login')
    }
    const [formValue, setformValue] = useState({email:'',username:'', password: ''})
    const handleSubmit = async() =>{
    const loginFormData = new FormData();
    loginFormData.append("email", formValue.email)
    loginFormData.append("username", formValue.username)
    loginFormData.append("password", formValue.password)
    try {
        const response = await axios({
            method: "post",
            url: "http://localhost:3000/user/signup",
            data: loginFormData,
            headers: {"Content-Type": "multipart/form-data", password:'ty'}
        });
        
    } catch(error) {
        console.log(error)
    }
    onClick();
    }
    const handleChange = (e)=>{
        setformValue({
            ...formValue,
            [e.target.name]: e.target.value
        });
    }
    

    return (
        <div>
            <h2>Hello and Welcome to Fireside</h2>
            <form onSubmit={handleSubmit}>
                <h4>Email</h4>
                <input type='email' name="email" placeholder='enter an email address' value={formValue.email} onChange={handleChange} />
                <br/>
                <h4>UserName</h4>
                <input type='username' name="username" placeholder='enter a username' value={formValue.username} onChange={handleChange} />
                <br/>
                <h4>Password</h4>
                <input type='password' name="password" placeholder='create a password' value={formValue.password} onChange={handleChange}/>
                <br/>
                <input type='submit'  value='Create Account'/>
            </form>
        </div>
    )
}


export default SignUpPage