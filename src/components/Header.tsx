import React from 'react'

const Header: React.FC = () => {
  return (
    <header>

      <section className='container mt-16'>
        <div className='flex justify-end'>
          <div className="border border-solid border-[#2F2F2F] inline-flex rounded-full p-0.5 gap-0.5">
            <div className="p-2 bg-[#2F2F2F] rounded-full flex justify-center items-center">
              <i className='block h-5 w-5'>
                <svg width="100%" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <mask id="Frame94_path-1-inside-1-1-105" fill="white">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.35 12.5138C19.6518 11.7203 18.7609 11.0829 17.9591 11.3621C15.5919 12.1862 13.0053 12.0568 10.7942 10.7802C7.54552 8.9046 6.03607 5.08856 6.67803 1.2733C6.81416 0.464273 6.07838 -0.278702 5.35225 0.103137C2.17006 1.77653 0 5.1147 0 8.95972C0 14.4826 4.47715 18.9597 10 18.9597C14.2711 18.9597 17.9168 16.2821 19.35 12.5138Z" />
                  </mask>
                  <path d="M10.7942 10.7802L9.79423 12.5123L10.7942 10.7802ZM6.67803 1.2733L4.70575 0.941442L6.67803 1.2733ZM17.9591 11.3621L17.3015 9.47326L17.9591 11.3621ZM19.35 12.5138L17.4806 11.8029L19.35 12.5138ZM17.3015 9.47326C15.4224 10.1275 13.4485 10.0033 11.7942 9.0482L9.79423 12.5123C12.562 14.1103 15.7613 14.245 18.6167 13.2509L17.3015 9.47326ZM11.7942 9.0482C9.37977 7.65421 8.12434 4.73105 8.6503 1.60516L4.70575 0.941442C3.9478 5.44607 5.71127 10.155 9.79423 12.5123L11.7942 9.0482ZM2 8.95972C2 5.88651 3.73232 3.21467 6.28312 1.87331L4.42139 -1.66703C0.607809 0.338384 -2 4.34289 -2 8.95972H2ZM10 16.9597C5.58172 16.9597 2 13.378 2 8.95972H-2C-2 15.5871 3.37258 20.9597 10 20.9597V16.9597ZM17.4806 11.8029C16.3328 14.8207 13.4137 16.9597 10 16.9597V20.9597C15.1285 20.9597 19.5008 17.7434 21.2193 13.2248L17.4806 11.8029ZM8.6503 1.60516C8.83211 0.524675 8.44133 -0.535412 7.69895 -1.22435C6.90694 -1.95934 5.63603 -2.30576 4.42139 -1.66703L6.28312 1.87331C6.08732 1.97627 5.82619 2.02963 5.55111 1.98307C5.29194 1.9392 5.1003 1.82112 4.97803 1.70764C4.75103 1.49698 4.66008 1.2129 4.70575 0.941442L8.6503 1.60516ZM18.6167 13.2509C18.3599 13.3403 18.0726 13.2964 17.8343 13.1096C17.7044 13.0077 17.5524 12.8327 17.4685 12.5712C17.3787 12.2916 17.4003 12.014 17.4806 11.8029L21.2193 13.2248C21.7268 11.8907 21.1713 10.6431 20.3025 9.96182C19.4937 9.32765 18.36 9.10471 17.3015 9.47326L18.6167 13.2509Z" fill="white" mask="url(#Frame94_path-1-inside-1-1-105)" />
                  <path d="M12 1.95972H17.2199C17.3138 1.95972 17.3559 2.0776 17.2832 2.13711L12.2168 6.28232C12.1441 6.34183 12.1862 6.45972 12.2801 6.45972H17.5" stroke="white" stroke-width="2" />
                </svg>
              </i>
            </div>
            <div className="p-2 bg-transparent rounded-full flex justify-center items-center">
              <i className='block h-5 w-5'>
                <svg width="100%" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.2105 9.5H19M16.2105 9.5C16.2105 11.2314 15.5548 12.8097 14.4781 14M16.2105 9.5C16.2105 7.76858 15.5548 6.19032 14.4781 5M9.5 16.2105V19M9.5 16.2105C11.4747 16.2105 13.2502 15.3576 14.4781 14M9.5 16.2105C7.76858 16.2105 6.19032 15.5548 5 14.4781M2.78947 9.5H0M2.78947 9.5C2.78947 7.5253 3.64242 5.74981 5 4.52186M2.78947 9.5C2.78947 11.4747 3.64242 13.2502 5 14.4781M9.5 2.78947V0M9.5 2.78947C7.76858 2.78947 6.19032 3.4452 5 4.52186M9.5 2.78947C11.4747 2.78947 13.2502 3.64242 14.4781 5M5 4.52186L2.97814 2.5M14.4781 14L16.6887 16.2105M14.4781 5L16.6887 2.78947M5 14.4781L2.97814 16.5" stroke="white" stroke-width="2" />
                </svg>
              </i>
            </div>
          </div>

          <div className="border border-solid border-[#2F2F2F] inline-flex rounded-full p-0.5 gap-0.5">
            <div className="p-2 bg-[#2F2F2F] rounded-full flex justify-center items-center">
              <i className='block h-5 w-5'>
                <svg width="100%" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.44 14V2.8H8.744V4.56H2.408V7.472H8.024V9.232H2.408V12.24H8.824V14H0.44ZM10.9348 14V5.552H12.8708V6.864C13.5428 5.872 14.4228 5.376 15.5108 5.376C16.4494 5.376 17.1854 5.66933 17.7188 6.256C18.2521 6.84267 18.5188 7.632 18.5188 8.624V14H16.5828V9.2C16.5828 8.53867 16.4228 8.032 16.1028 7.68C15.7934 7.31733 15.3508 7.136 14.7748 7.136C14.2094 7.136 13.7508 7.32267 13.3988 7.696C13.0468 8.06933 12.8708 8.58133 12.8708 9.232V14H10.9348Z" fill="white" />
                </svg>
              </i>
            </div>
            <div className="p-2 bg-transparent rounded-full flex justify-center items-center">
              <i className='block h-5 w-5'>
                <svg width="100%" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.44 14V2.8H4.856C6.15733 2.8 7.192 3.14133 7.96 3.824C8.728 4.50667 9.112 5.424 9.112 6.576C9.112 7.78133 8.68533 8.72 7.832 9.392C6.98933 10.064 5.92267 10.4 4.632 10.4H2.408V14H0.44ZM2.408 8.624H4.696C5.432 8.624 6.01867 8.43733 6.456 8.064C6.89333 7.69067 7.112 7.2 7.112 6.592C7.112 5.952 6.89333 5.46133 6.456 5.12C6.02933 4.768 5.44267 4.592 4.696 4.592H2.408V8.624ZM12.6315 16.608C11.9275 16.608 11.2608 16.4373 10.6315 16.096L11.2875 14.656C11.6822 14.8693 12.0608 14.976 12.4235 14.976C12.7008 14.976 12.9302 14.9013 13.1115 14.752C13.2928 14.6133 13.4635 14.3627 13.6235 14L10.1035 5.552H12.1675L14.5675 11.824L16.7595 5.552H18.7755L15.4155 14.24C15.0742 15.104 14.6955 15.712 14.2795 16.064C13.8635 16.4267 13.3142 16.608 12.6315 16.608Z" fill="white" />
                </svg>
              </i>
            </div>
          </div>
        </div>
      </section>

      <section className='container'>

        <div className="flex justify-between items-center">
          <div className="">
            <h1 className='text-[5rem] font-black text-transparent bg-clip-text bg-gradient-to-br from-[#42D392] to-[#5980DE]'>Vadim Bukhlov</h1>
            <p className='text-3xl'>JS Developer, Disigner</p>
          </div>

          <div className="flex gap-3">
            <div className="py-2 px-4 bg-[#212121] rounded-lg flex gap-1 justify-center items-center">
              <i className='block w-[9px] h-[13px]'>
                <svg width="100%" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.9728 7.5L0.890076 3.00901L3.1099 0.99099L9.02718 7.5L3.1099 14.009L0.890076 11.991L4.9728 7.5Z" fill="#8FC8E4" />
                </svg>
              </i>
              <span>vadim.buklov@mail.ru</span>
            </div>
            <button className='py-2 px-4 bg-[#2F2F2F] rounded-lg text-[#8FC8E4] flex gap-1 justify-center items-center'>
              <span className='font-medium'>Download resume</span>
              <i className="block w-[11px] h-[16px]">
                <svg width="100%" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7071 10.2071L5.49995 15.4142L0.292847 10.2071L1.70706 8.79289L4.49995 11.5858L4.49995 1L6.49995 1L6.49995 11.5858L9.29285 8.79289L10.7071 10.2071Z" fill="#8FC8E4" />
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