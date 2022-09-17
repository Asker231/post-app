import { Link, Navigate } from 'react-router-dom';
import style from './homepage.module.css';
import AuthHook from '../../hooks/AuthHook.js'
import AddPosts from '../../images/Arrow 6.svg'


import Header from '../../components/header/Header';
import Button  from '@mui/material/Button';
import CardItem from '../../components/card/CardItem';

import { useSelector } from 'react-redux';

function HomePage() {
  const sel = useSelector(state=>state.posts.arr)
  const {isAuth} = AuthHook();
  return isAuth? (
    <div className={style.homePage}>
        
        <Header/>
        <div  className={style.wrap}>
         <Button className={style.addPosts} variant="contained" size="small">
          <Link to='/PostPage'>Добавить пост <img src={AddPosts}  alt='iconPost'/> </Link>
        </Button>
        </div>
        <div className={style.content}>
       {
          sel.map((el)=>{
            return <CardItem
              title={el.title}
              url={el.photo}
              content={el.content}

            />
          })
        }
        </div>
      
    </div>
  ):(
    <Navigate to='/RegistrationPage'/>
  )
}

export default HomePage;
