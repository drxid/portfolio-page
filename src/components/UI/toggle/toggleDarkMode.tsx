import React, { useState } from 'react'

type Props = {
  size?: string
}

const ToggleDarkMode: React.FC<Props> = (props: Props) => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    if (isDarkMode) {
      document.body.classList.remove('dark')
    } else {
      document.body.classList.add('dark')
    }
  }

  return (

    <button onClick={toggleDarkMode} className={`group ${isDarkMode ? 'dark' : ''} border border-solid border-[#2F2F2F] dark:border-[#E0E0E0] inline-flex justify-center items-center rounded-full p-0.5 gap-0.5`}>
      <div className={`${props.size === 'small' ? 'p-1.5' : 'p-2'} ${!isDarkMode ? 'bg-[#2F2F2F] dark:bg-[#6d6d6d] group-hover:bg-[#343434]' : 'bg-transparent'}  rounded-full flex justify-center items-center transition-colors`}>
        <i className={props.size === 'small' ? 'h-4 w-4' : 'h-5 w-5'}>
          <svg width="100%" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="Frame94_path-1-inside-1-1-105" fill="white">
              <path fillRule="evenodd" clipRule="evenodd" d="M19.35 12.5138C19.6518 11.7203 18.7609 11.0829 17.9591 11.3621C15.5919 12.1862 13.0053 12.0568 10.7942 10.7802C7.54552 8.9046 6.03607 5.08856 6.67803 1.2733C6.81416 0.464273 6.07838 -0.278702 5.35225 0.103137C2.17006 1.77653 0 5.1147 0 8.95972C0 14.4826 4.47715 18.9597 10 18.9597C14.2711 18.9597 17.9168 16.2821 19.35 12.5138Z" />
            </mask>
            <path d="M10.7942 10.7802L9.79423 12.5123L10.7942 10.7802ZM6.67803 1.2733L4.70575 0.941442L6.67803 1.2733ZM17.9591 11.3621L17.3015 9.47326L17.9591 11.3621ZM19.35 12.5138L17.4806 11.8029L19.35 12.5138ZM17.3015 9.47326C15.4224 10.1275 13.4485 10.0033 11.7942 9.0482L9.79423 12.5123C12.562 14.1103 15.7613 14.245 18.6167 13.2509L17.3015 9.47326ZM11.7942 9.0482C9.37977 7.65421 8.12434 4.73105 8.6503 1.60516L4.70575 0.941442C3.9478 5.44607 5.71127 10.155 9.79423 12.5123L11.7942 9.0482ZM2 8.95972C2 5.88651 3.73232 3.21467 6.28312 1.87331L4.42139 -1.66703C0.607809 0.338384 -2 4.34289 -2 8.95972H2ZM10 16.9597C5.58172 16.9597 2 13.378 2 8.95972H-2C-2 15.5871 3.37258 20.9597 10 20.9597V16.9597ZM17.4806 11.8029C16.3328 14.8207 13.4137 16.9597 10 16.9597V20.9597C15.1285 20.9597 19.5008 17.7434 21.2193 13.2248L17.4806 11.8029ZM8.6503 1.60516C8.83211 0.524675 8.44133 -0.535412 7.69895 -1.22435C6.90694 -1.95934 5.63603 -2.30576 4.42139 -1.66703L6.28312 1.87331C6.08732 1.97627 5.82619 2.02963 5.55111 1.98307C5.29194 1.9392 5.1003 1.82112 4.97803 1.70764C4.75103 1.49698 4.66008 1.2129 4.70575 0.941442L8.6503 1.60516ZM18.6167 13.2509C18.3599 13.3403 18.0726 13.2964 17.8343 13.1096C17.7044 13.0077 17.5524 12.8327 17.4685 12.5712C17.3787 12.2916 17.4003 12.014 17.4806 11.8029L21.2193 13.2248C21.7268 11.8907 21.1713 10.6431 20.3025 9.96182C19.4937 9.32765 18.36 9.10471 17.3015 9.47326L18.6167 13.2509Z" fill="white" mask="url(#Frame94_path-1-inside-1-1-105)" />
            <path d="M12 1.95972H17.2199C17.3138 1.95972 17.3559 2.0776 17.2832 2.13711L12.2168 6.28232C12.1441 6.34183 12.1862 6.45972 12.2801 6.45972H17.5" stroke="white" strokeWidth="2" />
          </svg>
        </i>
      </div>
      <div className={`${props.size === 'small' ? 'p-1.5' : 'p-2'} ${isDarkMode ? 'bg-[#2F2F2F] dark:bg-[#6d6d6d] group-hover:bg-[#343434]' : 'bg-transparent'} rounded-full flex justify-center items-center transition-colors`}>
        <i className={props.size === 'small' ? 'h-4 w-4' : 'h-5 w-5'}>
          <svg width="100%" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.2105 9.5H19M16.2105 9.5C16.2105 11.2314 15.5548 12.8097 14.4781 14M16.2105 9.5C16.2105 7.76858 15.5548 6.19032 14.4781 5M9.5 16.2105V19M9.5 16.2105C11.4747 16.2105 13.2502 15.3576 14.4781 14M9.5 16.2105C7.76858 16.2105 6.19032 15.5548 5 14.4781M2.78947 9.5H0M2.78947 9.5C2.78947 7.5253 3.64242 5.74981 5 4.52186M2.78947 9.5C2.78947 11.4747 3.64242 13.2502 5 14.4781M9.5 2.78947V0M9.5 2.78947C7.76858 2.78947 6.19032 3.4452 5 4.52186M9.5 2.78947C11.4747 2.78947 13.2502 3.64242 14.4781 5M5 4.52186L2.97814 2.5M14.4781 14L16.6887 16.2105M14.4781 5L16.6887 2.78947M5 14.4781L2.97814 16.5" stroke="white" strokeWidth="2" />
          </svg>
        </i>
      </div>
    </button>
  )
}

export default ToggleDarkMode