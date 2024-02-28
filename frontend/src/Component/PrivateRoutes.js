import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function PrivateRoutes(props) {
    const {Component}=props;
    const navigate=useNavigate();
    useEffect(()=>{
        let login=localStorage.getItem("user-info");
        if(!login){
            navigate('/login')
        }
    },[])
  return (
    <div>
        <Component />
    </div>
  )
}
