import React, { useState } from 'react'
import style from './form.module.css';
import  TextField  from '@mui/material/TextField';
import Button from '@mui/material/Button'
import { NavLink } from 'react-router-dom';


const Form = ({title,func,path,text}) => {
    const [email,setEmail] = useState(null);
    const [password,setPassword] = useState(null);

  return (
    <div className={style.form}>
        <TextField 
        value={email}
        onChange={(e)=>
          {
             setEmail(e.target.value);
            
          }
         
        }
        id="standard-basic" 
        label="Email" 
        type='email'
        variant="standard" />

        <TextField 
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        id="standard-basic" 
        label="Password" 
        type='password'
        variant="standard" />
        <Button onClick={()=> {
  
          func(email,password)
          setPassword('');
          setEmail('');
        }
          
          } variant="contained">{title}</Button>
        
        <div className={style.link}>
          <p>или</p>
         <Button  className={style.btn} variant="outlined" > 
          <NavLink  to={path}>{text}</NavLink>
          </Button> </div> 
       
    </div>
  )
}

export default Form