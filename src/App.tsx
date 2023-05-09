import React from 'react'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'

const App: React.FC = () => {

  return (
    <div className='bg-[#1A1A1A] text-white dark:bg-white dark:text-black transition-colors'>
      <Header />
      <div className="container">
      </div>
      <Content />
      <Footer />
    </div>
  )
}

export default App
