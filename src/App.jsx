import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const HeaderComponent = () => {
  return (
    <>
      <div className="header">
        <title>My App</title>
        <div className="nav-items">
        <h1>EpicureanEats</h1>
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
const Body = () => {
  return (
    <>
      <h1>Body</h1>
    </>
  )
};
const Footer = () => {
  return (
    <>
      <h1>Footer</h1>
    </>
  )
}; 

const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <Body />
      <Footer />
    </>
  ); 
};

export default AppLayout;
