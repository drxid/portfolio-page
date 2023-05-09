import React, { useState } from 'react'

import { CopyToClipboard } from 'react-copy-to-clipboard'

type Props = {
  email: string
}



const CopyEmail: React.FC<Props> = (props: Props) => {

  const [isVisible, setIsVisible] = useState(false)


  const handleClick = () => {
    setIsVisible(true)
    setTimeout(() => {
      setIsVisible(false)
    }, 3000)
  }

  return (
    <div className="relative">

      <CopyToClipboard text={props.email}>
        <button onClick={handleClick} className="group py-2 px-4 bg-[#212121] dark:bg-[#F5F5F5]  rounded-lg flex gap-1 justify-center items-center hover:bg-[#343434] transition-colors">
          <i className='block group-hover:hidden w-[20px] h-[20px]'>
            <svg width="100%" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M10.0827 11.509L6 7.01802L8.21982 5L14.1371 11.509L8.21982 18.018L6 16L10.0827 11.509Z" fill="#8FC8E4" />
            </svg>
          </i>

          <i className='hidden group-hover:block w-[20px] h-[24px]'>
            <svg width="100%" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 9V19H11.7857M8.92857 11H11.7857M8.92857 13H13.2143M7.14286 6V16H15V9.66667L11.0714 6H7.14286Z" stroke="#8FC8E4" strokeWidth="2" />
            </svg>
          </i>


          <span>{props.email}</span>
        </button>
      </CopyToClipboard>

      <div className={`${isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'} transition-all `}>
        <div className="flex items-center justify-center py-2 px-4 text-sm backdrop-blur-md bg-black/20 dark:bg-[#F5F5F5] absolute m-auto left-0 right-0 top-14 rounded-lg">The email was copied</div>
      </div>


    </div>

  )
}

export default CopyEmail