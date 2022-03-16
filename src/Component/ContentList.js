import axios from 'axios'
import React, { useEffect,useState } from 'react'
import {Link} from 'react-router-dom'

function ShowContent(){
    const [content, setContent] = useState([])
    useEffect(()=>{
        axios.get('https://fireside-backend.herokuapp.com/content').then(res=>{
            console.log(res.data)

            setContent(res.data)
        })
    },[])
    const contentList = content.map((doc, idx)=>{
        return(
            
        <div key={idx}>
        {/* <Link to={doc.id} key={doc.id}><div className='cards' id={doc.id}>{doc.title}</div></Link> */}
        <h2>{doc.title}</h2>
        <p>{doc.body}</p>
        </div>
        
        )
    })

    return(
        <div className='ContentPage'>
            <div>{contentList}</div>
        </div>
    )
}
export default ShowContent