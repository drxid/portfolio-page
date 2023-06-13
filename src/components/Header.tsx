import React from 'react'
import styles from './Content.module.css'

import ToggleDarkMode from './UI/toggle/toggleDarkMode'
import ToggleLanguageMode from './UI/toggle/toggleLanguageMode'
import CopyEmail from './UI/button/copyEmail'

import { Name, Title, DownloadResume } from '../LanguageDictionary'

function startDownload() {
  window.open('/Vadim_Bukhlov_JS_developer.pdf')
}

type Props = {
  isDarkMode: boolean
  onDarkModeToggle: (isDarkMode: boolean) => void
}

const Header: React.FC<Props> = ({ isDarkMode, onDarkModeToggle }) => {
  return (
    <header>
      <section className={`${styles.fadeInItem} ${styles.animDelay50} container py-16 md:pt-16`}>
        <div className="flex justify-center md:justify-end gap-2">
          <ToggleDarkMode isDarkMode={isDarkMode} onDarkModeToggle={onDarkModeToggle} />
          <ToggleLanguageMode />
        </div>
      </section>

      <section className={`${styles.fadeInItem} ${styles.animDelay50} container`}>
        <div className="flex flex-col justify-center items-center md:flex-row md:items-center md:justify-between space-y-5 md:space-y-0">
          <div className="text-center md:text-left space-y-3">
            <h1 className="text-[5rem] leading-[5.5rem] font-black text-transparent bg-clip-text bg-gradient-to-br from-[#42D392] dark:from-[#32d88d] to-[#5980DE] dark:to-[#2c60da]">
              <Name />
            </h1>
            <p className="text-3xl"><Title /></p>
          </div>

          <div className="flex flex-col items-center md:flex-row gap-3">
            <CopyEmail email="work@drxid.ru" />

            <button
              type="submit"
              onClick={startDownload}
              className="order-1 md:order-2 py-3 px-6 md:py-2 md:px-4 text-xl md:text-lg bg-[#2F2F2F] dark:bg-[#CEF0FF] hover:bg-[#3a3a3a] rounded-lg text-[#8FC8E4] dark:text-[#117FB5] flex gap-2 md:gap-1 justify-center items-center transition-colors "
            >
              <span className="font-medium"><DownloadResume /></span>
              <i className="block w-[11px] h-[16px] text-[#8FC8E4] dark:text-[#117FB5]">
                <svg width="100%" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.7071 10.2071L5.49995 15.4142L0.292847 10.2071L1.70706 8.79289L4.49995 11.5858L4.49995 1L6.49995 1L6.49995 11.5858L9.29285 8.79289L10.7071 10.2071Z"
                    fill="currentColor"
                  />
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