
import React from 'react'

type Props = {
  size?: string
  isDarkMode: boolean
  onDarkModeToggle: (isDarkMode: boolean) => void
}

const ToggleDarkMode: React.FC<Props> = ({ size, isDarkMode, onDarkModeToggle }) => {
  const toggleDarkMode = () => {
    const updatedDarkMode = !isDarkMode
    onDarkModeToggle(updatedDarkMode)
  }

  return (
    <button
      onClick={toggleDarkMode}
      className={`group ${isDarkMode ? 'dark' : ''} border border-solid border-[#2F2F2F] dark:border-[#E0E0E0] inline-flex justify-center items-center rounded-full p-0.5 gap-0.5`}
    >
      <div
        className={`${size === 'small' ? 'p-1.5' : 'p-2'} ${!isDarkMode ? 'bg-[#2F2F2F] dark:bg-[#6d6d6d] group-hover:bg-[#343434]' : 'bg-transparent'
          }  rounded-full flex justify-center items-center transition-colors`}
      >
        <i className={size === 'small' ? 'h-4 w-4' : 'h-5 w-5'}>

          <svg className={isDarkMode ? 'text-black' : 'text-white'} width="100%" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.2942 11.6463C12.7836 13.0835 15.6766 13.2156 18.2879 12.3065C18.3124 12.2979 18.3374 12.2945 18.3619 12.2955C17.0359 15.6161 13.7905 17.9597 10 17.9597C5.02944 17.9597 1 13.9303 1 8.95972C1 5.55101 2.89473 2.58328 5.69295 1.05508C5.69512 1.07169 5.69494 1.08922 5.69189 1.10737C4.99193 5.26732 6.62839 9.5298 10.2942 11.6463Z" stroke="currentColor" strokeWidth="2" />
            <path d="M12 1.95972H17.2199C17.3138 1.95972 17.3559 2.0776 17.2832 2.13711L12.2168 6.28232C12.1441 6.34183 12.1862 6.45972 12.2801 6.45972H17.5" stroke="currentColor" strokeWidth="2" />
          </svg>

        </i>
      </div>
      <div
        className={`${size === 'small' ? 'p-1.5' : 'p-2'} ${isDarkMode ? 'bg-[#2F2F2F] dark:bg-[#6d6d6d] group-hover:bg-[#343434]' : 'bg-transparent'
          } rounded-full flex justify-center items-center transition-colors`}
      >
        <i className={size === 'small' ? 'h-4 w-4' : 'h-5 w-5'}>

          <svg className={isDarkMode ? 'text-white' : 'text-white'} width="100%" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.2105 9.5H19M16.2105 9.5C16.2105 11.2314 15.5548 12.8097 14.4781 14M16.2105 9.5C16.2105 7.76858 15.5548 6.19032 14.4781 5M9.5 16.2105V19M9.5 16.2105C11.4747 16.2105 13.2502 15.3576 14.4781 14M9.5 16.2105C7.76858 16.2105 6.19032 15.5548 5 14.4781M2.78947 9.5H0M2.78947 9.5C2.78947 7.5253 3.64242 5.74981 5 4.52186M2.78947 9.5C2.78947 11.4747 3.64242 13.2502 5 14.4781M9.5 2.78947V0M9.5 2.78947C7.76858 2.78947 6.19032 3.4452 5 4.52186M9.5 2.78947C11.4747 2.78947 13.2502 3.64242 14.4781 5M5 4.52186L2.97814 2.5M14.4781 14L16.6887 16.2105M14.4781 5L16.6887 2.78947M5 14.4781L2.97814 16.5" stroke="currentColor" strokeWidth="2" />
          </svg>

        </i>
      </div>
    </button>
  )
}

export default ToggleDarkMode