import axios from 'axios'
import React, { useEffect,useState } from 'react'
import {useParams} from 'react-router-dom'

function RenderContent(){
const [contentDesc, setContentDesc] = useState({})
const {id} = useParams()

const {title, body} = contentDesc



useEffect(()=>{
    axios.get('https://fireside-backend.herokuapp.com/content'+id).then(res=>{
        // console.log(res.data)
        setContentDesc(res.data)
        
        
    })
}, [])


    return(

        <div className='ContentDesc'>
            <h1 className='ClassDetails'>Content Title: &nbsp;{title}</h1>
            <h2 className='ClassDetails'>Content Body: &nbsp;{body}</h2>
        </div>
    )
}

export default RenderContent