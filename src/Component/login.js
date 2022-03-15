import axios from 'axios'
import React, { useEffect,useState } from 'react'

function LoginPage(){
    

    const [formValue, setformValue] = useState({email:'',username:'', password: ''})
    const handleSubmit = async() =>{
    const loginFormData = new FormData();
    
    loginFormData.append("username", formValue.username)
    loginFormData.append("password", formValue.password)
    try {
        const response = await axios({
            method: "get",
            url: "http://localhost:3000/user",
            data: loginFormData,
            headers: {"Content-Type": "multipart/form-data"}
        });
    } catch(error) {
        console.log(error)
    }
    }
    const handleChange = (e)=>{
        setformValue({
            ...formValue,
            [e.target.name]: e.target.value
        });
    }
    

    return (
        <div>
            <h2>Hello and Welcome to Fireside login in here</h2>
            {/* <form onSubmit={handleSubmit}>            
                <br/>
                <h4>UserName</h4>
                <input type='username' name="username" placeholder='enter a username' value={formValue.username} onChange={handleChange} />
                <br/>
                <h4>Password</h4>
                <input type='password' name="password" placeholder='create a password' value={formValue.password} onChange={handleChange}/>
                <br/>
                <input type='submit' value='Create Account'/>
            </form> */}
        </div>
    )
}
export default LoginPage