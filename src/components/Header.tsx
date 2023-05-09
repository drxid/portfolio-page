import React from 'react'


import ToggleDarkMode from './UI/toggle/toggleDarkMode'
import ToggleLanguageMode from './UI/toggle/toggleLanguageMode'
import CopyEmail from './UI/button/copyEmail'

function startDownload() {
  window.open('/Vadim_Bukhlov_JS_developer.pdf')
}

const Header: React.FC = () => {

  return (
    <header>

      <section className='container pt-16'>
        <div className='flex justify-end gap-2'>
          <ToggleDarkMode />
          <ToggleLanguageMode />
        </div>
      </section>

      <section className='container'>

        <div className="flex justify-between items-center">
          <div className="">
            <h1 className='text-[5rem] font-black text-transparent bg-clip-text bg-gradient-to-br from-[#42D392] dark:from-[#32d88d] to-[#5980DE] dark:to-[#2c60da]'>Vadim Bukhlov</h1>
            <p className='text-3xl'>JS Developer, Disigner</p>
          </div>

          <div className="flex gap-3">
            <CopyEmail email="work@drxid.ru" />

            <button type="submit" onClick={startDownload} className='py-2 px-4 bg-[#2F2F2F] dark:bg-[#CEF0FF] hover:bg-[#3a3a3a] rounded-lg text-[#8FC8E4] dark:text-[#117FB5]  flex gap-1 justify-center items-center transition-colors'>
              <span className='font-medium'>Download resume</span>
              <i className="block w-[11px] h-[16px] text-[#8FC8E4] dark:text-[#117FB5]">
                <svg width="100%" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M10.7071 10.2071L5.49995 15.4142L0.292847 10.2071L1.70706 8.79289L4.49995 11.5858L4.49995 1L6.49995 1L6.49995 11.5858L9.29285 8.79289L10.7071 10.2071Z" fill="currentColor" />
                </svg>
              </i>
            </button>
          </div>




        </div>

      </section>

    </header>
  )
}

export default Header