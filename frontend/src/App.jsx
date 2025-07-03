import React from 'react'
import{About, Footer, Header, Skills, Projects, Qualification} from './container'
import { Navbar } from './components'
import './App.scss'

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Qualification />
      <Projects />
      <Footer />
    </div>
  )
}

export default App