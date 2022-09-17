import React, { useState } from 'react'
import style from './header.module.css';
import Avatar from '@mui/material/Avatar';
import Out from '../outComponent/Out';
const Header = () => {
    const[out,setOut] = useState(false);
  return (
    <div className={style.header}>
        <h1>Enhell</h1>
        <div className={style.menu}>
            <Avatar onClick={()=>setOut(prev=>!prev)}  src="/broken-image.jpg" />
             {out?<Out/>:null}
        </div>
       
       
    </div>
  )
}

export default Header