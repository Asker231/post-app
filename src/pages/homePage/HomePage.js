import { Link, Navigate } from 'react-router-dom';
import style from './homepage.module.css';
import AuthHook from '../../hooks/AuthHook.js'
import AddPosts from '../../images/Arrow 6.svg'
import Alert from '@mui/material/Alert';
import { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import Button  from '@mui/material/Button';

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
         alert?<Alert className={style.hh} severity="success">Вы успешно вошли {email}</Alert>:null
        }
        <Header/>
        <div  className={style.wrap}>
         <Button className={style.addPosts} variant="contained" size="small">
          <Link to='/PostPage'>Добавить пост <img src={AddPosts}  alt='iconPost'/> </Link>
        </Button>
        </div>

      
       
    </div>
  ):(
    <Navigate to='/RegistrationPage'/>
  )
}

export default HomePage;
