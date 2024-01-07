//import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Section from './components/section'
import SectionMain from './components/sectionMain'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <Header />
      <Section />
      <SectionMain />
    </div>
  )
}

export default App
