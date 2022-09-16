import React from 'react'
import Form from '../../components/formAuth/Form';
import style from './registration.module.css';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser } from '../../redux/userSlice/userSlice';
import { useNavigate } from 'react-router-dom';


const RegistrationPage = () => {
  const nav = useNavigate()
  const disp = useDispatch()
  const hendleRegistration=(email,password)=>{
       const auth = getAuth();
       createUserWithEmailAndPassword(auth,email,password)
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
    <div className={style.registrationPage}>
        <Form
        title='регистрация'
        path='/LoginPage'
        text='войти'
        func={hendleRegistration}
        />
        
     
       
    </div>
  )
}

export default RegistrationPage