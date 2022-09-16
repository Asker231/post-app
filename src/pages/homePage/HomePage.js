import { Navigate } from 'react-router-dom';
import style from './homepage.module.css';
import AuthHook from '../../hooks/AuthHook.js'

import Alert from '@mui/material/Alert';
import { useEffect, useState } from 'react';


function HomePage() {
  const[alert,setAlert] = useState(true);

  const {isAuth,email} = AuthHook();
  useEffect(()=>{
  setTimeout(()=>{
     setAlert(alert=>!alert)
  },2000)
  },[])

  return isAuth? (
    <div className={style.homePage}>

        {
         alert?<Alert severity="success">Вы успешно вошли {email}</Alert>:null
        }
    </div>
  ):(
    <Navigate to='/RegistrationPage'/>
  )
}

export default HomePage;
