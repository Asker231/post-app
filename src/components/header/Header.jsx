import React, { useState } from 'react'
import style from './header.module.css';
import Avatar from '@mui/material/Avatar';
import Out from '../outComponent/Out';
const Header = () => {
    const[out,setOut] = useState(false);
  return (
    <div className={style.header}>
        <h1>logo</h1>
        <div >
            <Avatar onClick={()=>setOut(prev=>!prev)} className={style.menu} src="/broken-image.jpg" />
             {out?<Out/>:null}
        </div>
       
       
    </div>
  )
}

export default Header