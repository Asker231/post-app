import React, { useState } from 'react'
import style from './postComponent.module.css';
import TextField  from '@mui/material/TextField';
import Button  from '@mui/material/Button';
import { v4 } from 'uuid';
import { addPost } from '../../redux/postSlice/postSlice';
import {useDispatch} from'react-redux'
import  IconButton  from '@mui/material/IconButton';
import PhotoCamera  from '@mui/icons-material/PhotoCamera';

 

const Post =()=>{
  const[content,setContent]=useState();
  const[title,setTitle]=useState(null);
  const[photo,setPhoto] = useState();

  const disp = useDispatch();

   
  const data = {
       id:v4(),
       content,
       title,
       photo,
  }

  return (
    <div className={style.postForm}>
        <TextField
        onChange={(e)=>setTitle(e.target.value)}
        value={title}
        type='text' 
        id="standard-basic" 
        label="Название поста"
        variant="standard" 
        />

        <TextField
          onChange={(e)=>setContent(e.target.value)}
          id="outlined-multiline-static"
          label="Введите Ваш текст....."
          multiline
          rows={4}
          
        />
      <IconButton className={style.icon} color="primary" aria-label="upload picture" component="label">
      <input hidden accept="image/*" type="file" onChange={(e)=>setPhoto(e.target.files[0])} />
      <PhotoCamera />
      </IconButton>
      <Button onClick={()=> disp(addPost(data))} variant="contained" color="success">
           Опубликовать
      </Button>
        

    </div>
  )
}

export default Post