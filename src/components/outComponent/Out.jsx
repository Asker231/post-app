import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {removeUser} from '../../redux/userSlice/userSlice.js';
import style from './out.module.css';
const Out = () => {
    const {email} = useSelector(state=>state.users)
    const disp = useDispatch();
  return (
    <div className={style.out}>
       <p>{email}</p>
       <button onClick={()=>disp(removeUser())}>выйти</button>
    </div>
  )
}

export default Out