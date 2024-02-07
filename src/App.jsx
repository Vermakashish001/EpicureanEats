import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



const HeaderComponent = () => {
  return (
    <>
      <div className ="header">
      <title/>
      <div className ="nav-items">
        <ul>
          <li> Home </li>
          <li> About </li>
          <li> Contact </li>
          <li> Cart </li>
          </ul>

      </div>
      </div>
    </>
  )
};
const AppLayout = () => {
  return{};
};

export default HeaderComponent
