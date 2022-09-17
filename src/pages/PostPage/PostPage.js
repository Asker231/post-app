import React from 'react'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import style from './post.module.css';
import Post from '../../components/post/Post';

const PostPage = () => {
  return (
    <div className={style.post}>
      <Post/>
      <div className={style.wrap}>
       <Button className={style.addPosts} variant="contained" size="small">
          <Link to='/'>назад</Link>
        </Button>
    </div>
    
    </div>

    
  )
}

export default PostPage