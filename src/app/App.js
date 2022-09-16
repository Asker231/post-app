import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/homePage/HomePage.js';
import LoginPage from '../pages/loginPage/LoginPage.js';
import RegistrationPage from '../pages/registrationPage/RegistrationPage';
const App = () => {
  return (
    <div>
    
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/RegistrationPage' element={<RegistrationPage/>}/>
            <Route path='/LoginPage' element={<LoginPage/>}/>
        </Routes>
    </div>
  )
}

export default App;