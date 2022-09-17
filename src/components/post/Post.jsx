import React from 'react'
import style from './postComponent.module.css';
import TextField  from '@mui/material/TextField';
import Button  from '@mui/material/Button';
const Post =()=>{

  return (
    <div className={style.postForm}>
        <TextField
        type='text' 
        id="standard-basic" label="Название поста" variant="standard" />
        <TextField
          
          id="outlined-multiline-static"
          label="Введите Ваш текст....."
          multiline
          rows={4}
          
        />
        <TextField id="standard-basic" label="Введите url" variant="standard" />
        <Button variant="contained" color="success">
           Опубликовать
        </Button>
        
    </div>
  )
}

export default Post