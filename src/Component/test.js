import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'

function FrontTest(){
const [testData, setTestData] = useState()

useEffect(()=>{
    axios.get('http://localhost:3000/user/signup').then(res=>{
        console.log(res.data.class)
        setTestData(res.data.Class)
    }

    )
}, [])
return(
    <div>
        <h1>{testData}</h1>
    </div>
)
}



export default FrontTest