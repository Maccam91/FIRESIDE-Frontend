import axios from 'axios'
import React, { useEffect,useState } from 'react'
import {useNavigate} from 'react-router-dom'

function CreateContent(){
    const navigate = useNavigate();
    
    const [formValue, setformValue] = useState({title:'',body:'', })
    const handleSubmit = async(e) =>{
    const createFormData = new FormData();
    createFormData.append("email", formValue.title)
    createFormData.append("username", formValue.body)
    // e.preventDefault()
    
    
    try {
        const response = await axios({
            method: "post",
            url: process.env.REACT_APP_CREATE_CONTENT,
            data: createFormData,
            headers: {"Content-Type": "multipart/form-data"}
        });
        
    } catch(error) {
        console.log(error)
    }
    navigate('/')
    }
    const handleChange = (e)=>{
        setformValue({
            ...formValue,
            [e.target.name]: e.target.value
        });
    }


    return(
        <div className='CreateContent'>
            <div className='ContentCreateForm'>
            <form  onSubmit={handleSubmit}>
                <h4>Title</h4>
                <input type='text' name="title" placeholder='enter content Title Here' value={formValue.title} onChange={handleChange} />
                <br/>
                <h4>Content Body</h4>
                <textarea rows={10} name="body" placeholder='enter content body here' value={formValue.username} onChange={handleChange} />
                <br/>
                <input type='submit'  value='Submit Content'/>
            </form>
            </div>

        </div>
    )
}

export default CreateContent