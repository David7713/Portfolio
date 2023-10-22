import React from 'react'
import NavigationBar from './components/NavigationBar/NavigationBar'

import Home from './pages/Home/Home'
import About from './pages/About/About'
import Education from './pages/Education/Education'
import Portfolio from './pages/Portfolio/Portfolio'
import Contact from './pages/Contact/Contact'

import './App.css'
import BackToTop from './components/BackToTop/BackToTop';
const App = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <BackToTop></BackToTop>
        <Home></Home>
        <About></About>
        <Education></Education>
        <Portfolio></Portfolio>
        <Contact></Contact>
      </div>
  )
}

export default App