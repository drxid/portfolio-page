import React from 'react'

import ToggleDarkMode from './UI/toggle/toggleDarkMode'
import ToggleLanguageMode from './UI/toggle/toggleLanguageMode'

type Props = {
  isDarkMode: boolean
  onDarkModeToggle: (isDarkMode: boolean) => void
}

const Footer: React.FC<Props> = ({ isDarkMode, onDarkModeToggle }) => {
  return (
    <footer className=' border-t border-solid border-[#3E3E3E] dark:border-[#ececec]'>
      <div className="flex h-14 justify-between items-center container">
        <section className="flex gap-3">
          <a href='https://t.me/drxid' className='p-1 text-white dark:text-black hover:text-[#cdfbff] transition-colors'>
            <i className='w-5 h-5'>
              <svg width="100%" viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M29.5802 4.2353C31.3663 3.4667 33.281 5.01026 32.9657 6.9645L29.2407 30.047C28.8815 32.2726 26.4898 33.5497 24.492 32.4406C22.8202 31.5125 20.3398 30.0841 18.1044 28.5913C16.9882 27.8458 13.5702 25.4554 13.9904 23.7539C14.3496 22.2989 20.0955 16.8325 23.379 13.5815C24.6688 12.3045 24.0814 11.5668 22.5581 12.7426C18.7795 15.6593 12.7129 20.0938 10.7068 21.3419C8.93678 22.4429 8.01261 22.6308 6.91026 22.4429C4.89727 22.1001 3.03098 21.5692 1.5073 20.9237C-0.552053 20.0512 -0.451743 17.1588 1.50591 16.3165L29.5802 4.2353Z" fill="currentColor" />
              </svg>
            </i>
          </a>
          <a href='https://vk.com/drxid' className='p-1 text-white dark:text-black hover:text-[#cdfbff] transition-colors'>
            <i className='w-5 h-5'>
              <svg width="100%" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.5183 27.661C6.90183 27.661 0.276077 19.8736 0 6.91525H5.81886C6.00999 16.4263 10.2997 20.455 13.6976 21.2857V6.91525H19.1769V15.118C22.5323 14.765 26.0571 11.027 27.2464 6.91525H32.7256C31.8124 11.9823 27.9898 15.7203 25.2715 17.257C27.9898 18.503 32.3435 21.7633 34 27.661H27.9686C26.6731 23.7154 23.4455 20.6627 19.1769 20.2474V27.661H18.5183Z" fill="currentColor" />
              </svg>
            </i>
          </a>
          <a href='https://github.com/drxid' className='p-1 text-white dark:text-black hover:text-[#cdfbff] transition-colors'>
            <i className='w-5 h-5'>
              <svg width="100%" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M17 0C26.3891 0 34 7.80287 34 17.43C34 25.1293 29.1346 31.6607 22.3839 33.9676C21.522 34.1393 21.216 33.595 21.216 33.1309C21.216 32.5563 21.2364 30.6795 21.2364 28.3471C21.2364 26.7219 20.6924 25.6612 20.0821 25.1206C23.868 24.6888 27.846 23.2148 27.846 16.5202C27.846 14.6162 27.1864 13.0625 26.095 11.8419C26.2718 11.4016 26.8549 9.62871 25.9284 7.22831C25.9284 7.22831 24.5038 6.76127 21.2585 9.01547C19.9002 8.62957 18.445 8.4354 17 8.4286C15.555 8.4354 14.1015 8.62957 12.7449 9.01547C9.4962 6.76127 8.0682 7.22831 8.0682 7.22831C7.1451 9.62871 7.7282 11.4016 7.9033 11.8419C6.817 13.0625 6.15231 14.6162 6.15231 16.5202C6.15231 23.1978 10.1218 24.6944 13.8975 25.1347C13.4113 25.5699 12.971 26.3377 12.818 27.4648C11.849 27.9102 9.3874 28.681 7.871 26.0171C7.871 26.0171 6.9717 24.3424 5.2649 24.22C5.2649 24.22 3.6074 24.198 5.1493 25.2792C5.1493 25.2792 6.2628 25.8147 7.0363 27.8292C7.0363 27.8292 8.03421 30.9401 12.7636 29.8861C12.7721 31.343 12.7874 32.7161 12.7874 33.1309C12.7874 33.5916 12.4746 34.1307 11.6263 33.9692C4.87049 31.6658 0 25.131 0 17.43C0 7.80287 7.6126 0 17 0Z" fill="currentColor" />
              </svg>
            </i>
          </a>

          <a href='https://be.net/drxid' className='p-1 text-white dark:text-black hover:text-[#cdfbff] transition-colors'>
            <i className='w-6 h-3'>
              <svg width="100%" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M20.5793 4.42293H28.858V1.904H20.5793V4.42293ZM24.6601 9.48191C22.8133 9.48191 21.4107 10.6975 21.2757 12.9438H27.9013C27.4522 10.2779 26.3376 9.48191 24.6601 9.48191ZM24.9188 19.9004C26.624 19.9004 27.8753 18.7559 28.1307 17.7917H31.7169C30.6918 21.2789 28.5749 23.2373 24.774 23.2373C19.9235 23.2373 17.2014 19.5718 17.2014 14.708C17.2014 3.25379 32.7566 2.84313 31.9756 15.7776H21.2757C21.3798 18.4041 22.4 19.9004 24.9188 19.9004ZM8.78103 19.3964C10.7385 19.3964 12.1085 18.5964 12.1085 16.4377C12.1085 14.1986 10.8979 13.2274 8.86564 13.2274H3.96151V19.3964H8.78103ZM8.52232 9.86009C10.1511 9.86009 11.2754 9.05455 11.2754 7.18329C11.2754 5.21207 9.9672 4.60358 8.179 4.60358H3.96151V9.86009H8.52232ZM9.09669 0.762711C12.9546 0.762711 15.6361 2.11758 15.6361 6.33324C15.6361 8.42054 14.8469 9.97605 12.8537 11.0242C15.405 11.8294 16.6124 13.9439 16.6124 16.7222C16.6124 21.1324 13.3207 23.2373 9.38306 23.2373H-0.542358V0.762711H9.09669Z" fill="currentColor" />
              </svg>
            </i>
          </a>
        </section>
        <section className="">
          <div className='flex items-center justify-center gap-2'>
            <ToggleDarkMode isDarkMode={isDarkMode} onDarkModeToggle={onDarkModeToggle} size='small' />
            <ToggleLanguageMode size='small' />
          </div>
        </section>
      </div>
    </footer>
  )
}

export default Footer