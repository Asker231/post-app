import React from 'react';
import Form from '../../components/formAuth/Form'
import style from './loginPage.module.css';
import {getAuth,signInWithEmailAndPassword} from 'firebase/auth';
import { useDispatch } from 'react-redux';
import {addUser} from '../../redux/userSlice/userSlice.js'
import { useNavigate } from 'react-router-dom';


const LoginPage = () => {
  const nav = useNavigate();
  const disp = useDispatch()
  const hendleLogin=(email,password)=>{
     const auth = getAuth();
    signInWithEmailAndPassword(auth,email,password)
    .then(({user})=>{
       disp(addUser({
        email:user.email,
        id:user.uid,
        token:user.assecToken
       }))
       nav('/')
    })
  }
  return (
    <div className={style.LoginPage}>

        <Form
        title='войти'
        path='/RegistrationPage'
        text='регистрация'
        func={hendleLogin}
        />
     
     
       
    </div>
  )
}

export default LoginPage