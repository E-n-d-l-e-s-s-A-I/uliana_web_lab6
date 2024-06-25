import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Slider from './components/Slider'
import images from './data'

function App() {
  //возвращаем хтмл с нашим слайдером
  return (
    <>
      <Slider data={images} amount={2} />
    </>
  )
}

export default App
