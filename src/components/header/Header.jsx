import React from 'react'
import style from './header.module.css';
import MenuIcon from '@mui/icons-material/Menu';
const Header = () => {
  return (
    <div className={style.header}>
        <h1>logo</h1>
        <MenuIcon className={style.menu}/>
    </div>
  )
}

export default Header