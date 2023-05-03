import React from 'react'

import { CopyToClipboard } from 'react-copy-to-clipboard'
import ToggleDarkMode from './UI/toggle/toggleDarkMode'
import LanguageMode from './UI/toggle/toggleLanguageMode'

const Header: React.FC = () => {

  return (
    <header>

      <section className='container mt-16'>
        <div className='flex justify-end gap-2'>
          <ToggleDarkMode />
          <LanguageMode />
        </div>
      </section>

      <section className='container'>

        <div className="flex justify-between items-center">
          <div className="">
            <h1 className='text-[5rem] font-black text-transparent bg-clip-text bg-gradient-to-br from-[#42D392] to-[#5980DE]'>Vadim Bukhlov</h1>
            <p className='text-3xl'>JS Developer, Disigner</p>
          </div>

          <div className="flex gap-3">
            <CopyToClipboard text={'vadim.buklov@mail.ru'}>
              <button className="group py-2 px-4 bg-[#212121]  rounded-lg flex gap-1 justify-center items-center hover:bg-[#343434] transition-colors">
                <i className='block group-hover:hidden w-[16px] h-[20px]'>
                  <svg width="100%" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.08272 9.50901L4 5.01802L6.21982 3L12.1371 9.50901L6.21982 16.018L4 14L8.08272 9.50901Z" fill="#8FC8E4" />
                  </svg>
                </i>

                <i className='hidden group-hover:block w-[20px] h-[24px]'>
                  <svg width="100%" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 9V19H11.7857M8.92857 11H11.7857M8.92857 13H13.2143M7.14286 6V16H15V9.66667L11.0714 6H7.14286Z" stroke="#8FC8E4" strokeWidth="2" />
                  </svg>
                </i>


                <span>vadim.buklov@mail.ru</span>
              </button>
            </CopyToClipboard>


            <button className='py-2 px-4 bg-[#2F2F2F] hover:bg-[#3a3a3a] rounded-lg text-[#8FC8E4] flex gap-1 justify-center items-center transition-colors'>
              <span className='font-medium'>Download resume</span>
              <i className="block w-[11px] h-[16px]">
                <svg width="100%" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M10.7071 10.2071L5.49995 15.4142L0.292847 10.2071L1.70706 8.79289L4.49995 11.5858L4.49995 1L6.49995 1L6.49995 11.5858L9.29285 8.79289L10.7071 10.2071Z" fill="#8FC8E4" />
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