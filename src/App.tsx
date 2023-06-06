import React, { useState } from 'react'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'

const App: React.FC = () => {

  const [isDarkMode, setIsDarkMode] = useState(false)

  const handleDarkModeToggle = (updatedDarkMode: boolean) => {
    setIsDarkMode(updatedDarkMode)

    if (updatedDarkMode) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }

  return (
    <div className='bg-[#1A1A1A] text-white dark:bg-white dark:text-black transition-colors'>
      <Header isDarkMode={isDarkMode} onDarkModeToggle={handleDarkModeToggle} />
      <div className="container">
      </div>
      <Content />
      <Footer isDarkMode={isDarkMode} onDarkModeToggle={handleDarkModeToggle} />
    </div>
  )
}

export default App
