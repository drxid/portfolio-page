import React from 'react'

import styles from './Content.module.css'
import CopyEmail from './UI/button/copyEmail'

function calcDate(startDate: string, endDate?: string): string {
  let currentDate
  endDate ? currentDate = new Date(endDate) : currentDate = new Date()
  const startWorkDate = new Date(startDate)

  const timeDiff = currentDate.getTime() - startWorkDate.getTime()

  const millisecondsInYear = 1000 * 60 * 60 * 24 * 365
  const millisecondsInMonth = 1000 * 60 * 60 * 24 * 30

  const years = Math.floor(timeDiff / millisecondsInYear)
  const months = Math.floor((timeDiff % millisecondsInYear) / millisecondsInMonth)

  return `${years} year${years !== 1 ? 's' : ''} ${months} month${months !== 1 ? 's' : ''}`
}

const keySkillsTags: string[] = [
  'Web programming',
  'Web design',
  'HTML5',
  'CSS',
  'JavaScript ES6 +',
  'Vue 3',
  'Composition API',
  'Pinia',
  'Vuex',
  'Vue Router',
  'Nuxt 3',
  'Vite',
  'Axios',
  'PWA',
  'Sass',
  'SCSS',
  'Node.js',
  'Express',
  'REST API',
  'JWT Tokens',
  'MongoDB',
  'Auth',
  'GIT',
  'Postman',
  'Docker',
  'CI/CD',
  'Adobe soft',
  'Figma',
]

const Content: React.FC = () => {
  return (
    <main className='py-10 space-y-16'>
      <section className='container'>
        <div className="flex gap-16">
          <div className="space-y-2">
            <h3 className='text-base'>Social</h3>
            <div className="flex gap-5 justify-center items-center">
              <a href='https://t.me/drxid' className='p-1 text-white dark:text-black hover:text-[#cdfbff] transition-colors'>
                <i className='w-9 h-9'>
                  <svg width="100%" viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M29.5802 4.2353C31.3663 3.4667 33.281 5.01026 32.9657 6.9645L29.2407 30.047C28.8815 32.2726 26.4898 33.5497 24.492 32.4406C22.8202 31.5125 20.3398 30.0841 18.1044 28.5913C16.9882 27.8458 13.5702 25.4554 13.9904 23.7539C14.3496 22.2989 20.0955 16.8325 23.379 13.5815C24.6688 12.3045 24.0814 11.5668 22.5581 12.7426C18.7795 15.6593 12.7129 20.0938 10.7068 21.3419C8.93678 22.4429 8.01261 22.6308 6.91026 22.4429C4.89727 22.1001 3.03098 21.5692 1.5073 20.9237C-0.552053 20.0512 -0.451743 17.1588 1.50591 16.3165L29.5802 4.2353Z" fill="currentColor" />
                  </svg>
                </i>
              </a>
              <a href='https://vk.com/drxid' className='p-1 text-white dark:text-black hover:text-[#cdfbff] transition-colors'>
                <i className='w-9 h-9'>
                  <svg width="100%" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.5183 27.661C6.90183 27.661 0.276077 19.8736 0 6.91525H5.81886C6.00999 16.4263 10.2997 20.455 13.6976 21.2857V6.91525H19.1769V15.118C22.5323 14.765 26.0571 11.027 27.2464 6.91525H32.7256C31.8124 11.9823 27.9898 15.7203 25.2715 17.257C27.9898 18.503 32.3435 21.7633 34 27.661H27.9686C26.6731 23.7154 23.4455 20.6627 19.1769 20.2474V27.661H18.5183Z" fill="currentColor" />
                  </svg>
                </i>
              </a>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className='text-base'>Work</h3>
            <div className="flex gap-5  justify-center items-center">
              <a href='https://github.com/drxid' className='p-1 text-white dark:text-black hover:text-[#cdfbff] transition-colors'>
                <i className='w-9 h-9'>
                  <svg width="100%" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M17 0C26.3891 0 34 7.80287 34 17.43C34 25.1293 29.1346 31.6607 22.3839 33.9676C21.522 34.1393 21.216 33.595 21.216 33.1309C21.216 32.5563 21.2364 30.6795 21.2364 28.3471C21.2364 26.7219 20.6924 25.6612 20.0821 25.1206C23.868 24.6888 27.846 23.2148 27.846 16.5202C27.846 14.6162 27.1864 13.0625 26.095 11.8419C26.2718 11.4016 26.8549 9.62871 25.9284 7.22831C25.9284 7.22831 24.5038 6.76127 21.2585 9.01547C19.9002 8.62957 18.445 8.4354 17 8.4286C15.555 8.4354 14.1015 8.62957 12.7449 9.01547C9.4962 6.76127 8.0682 7.22831 8.0682 7.22831C7.1451 9.62871 7.7282 11.4016 7.9033 11.8419C6.817 13.0625 6.15231 14.6162 6.15231 16.5202C6.15231 23.1978 10.1218 24.6944 13.8975 25.1347C13.4113 25.5699 12.971 26.3377 12.818 27.4648C11.849 27.9102 9.3874 28.681 7.871 26.0171C7.871 26.0171 6.9717 24.3424 5.2649 24.22C5.2649 24.22 3.6074 24.198 5.1493 25.2792C5.1493 25.2792 6.2628 25.8147 7.0363 27.8292C7.0363 27.8292 8.03421 30.9401 12.7636 29.8861C12.7721 31.343 12.7874 32.7161 12.7874 33.1309C12.7874 33.5916 12.4746 34.1307 11.6263 33.9692C4.87049 31.6658 0 25.131 0 17.43C0 7.80287 7.6126 0 17 0Z" fill="currentColor" />
                  </svg>
                </i>
              </a>

              <a href='https://be.net/drxid' className='p-1 text-white dark:text-black hover:text-[#cdfbff] transition-colors'>
                <i className='w-9 h-6'>
                  <svg width="100%" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M20.5793 4.42293H28.858V1.904H20.5793V4.42293ZM24.6601 9.48191C22.8133 9.48191 21.4107 10.6975 21.2757 12.9438H27.9013C27.4522 10.2779 26.3376 9.48191 24.6601 9.48191ZM24.9188 19.9004C26.624 19.9004 27.8753 18.7559 28.1307 17.7917H31.7169C30.6918 21.2789 28.5749 23.2373 24.774 23.2373C19.9235 23.2373 17.2014 19.5718 17.2014 14.708C17.2014 3.25379 32.7566 2.84313 31.9756 15.7776H21.2757C21.3798 18.4041 22.4 19.9004 24.9188 19.9004ZM8.78103 19.3964C10.7385 19.3964 12.1085 18.5964 12.1085 16.4377C12.1085 14.1986 10.8979 13.2274 8.86564 13.2274H3.96151V19.3964H8.78103ZM8.52232 9.86009C10.1511 9.86009 11.2754 9.05455 11.2754 7.18329C11.2754 5.21207 9.9672 4.60358 8.179 4.60358H3.96151V9.86009H8.52232ZM9.09669 0.762711C12.9546 0.762711 15.6361 2.11758 15.6361 6.33324C15.6361 8.42054 14.8469 9.97605 12.8537 11.0242C15.405 11.8294 16.6124 13.9439 16.6124 16.7222C16.6124 21.1324 13.3207 23.2373 9.38306 23.2373H-0.542358V0.762711H9.09669Z" fill="currentColor" />
                  </svg>
                </i>
              </a>
            </div>
          </div>
        </div>

      </section>

      <section className='container flex justify-between gap-24'>
        <article className="">
          <h3 className='text-base mb-3'>About me</h3>
          <div className="space-y-3">
            <p className='text-lg'>
              My name is Vadim 👋. I work as a JavaScript developer with a focus on frontend development. I have a passion for designing website layouts and interfaces. I enjoy creating visually appealing designs that enhance the user experience. In addition to frontend development, I also have experience in backend development.
            </p>
            <p className='text-lg'>
              I strive to build robust and efficient applications that meet the needs of users. I am dedicated to continuously learning and staying up-to-date with the latest technologies and best practices in the field of web development.
            </p>
          </div>
        </article>
        <section className="space-y-5" style={{ flex: '0 0 40%' }}>
          <article>
            <h3 className='text-base mb-3'>Languages</h3>
            <p className='text-[1.4rem]'>
              Russian — Native
            </p>
            <p className='text-[1.4rem]'>
              English — B1 — Intermediate
            </p>
          </article>
          <article>
            <h3 className='text-base mb-3'>Higher education</h3>
            <p className='max-w-md text-[1.4rem]'>
              VVSU - Institute of Inform. Tech., Information Systems and Technologies
            </p>
          </article>
        </section>
      </section>

      <section className='container'>
        <h3 className='text-base mb-3'>Key skills</h3>
        <div className="space-y-5">
          <div className="flex gap-4">

            <div className="">
              <i className='text-[#D5D5D5] dark:text-[#626262] dark:hover:text-[#f26529] hover:text-[#f26529] transition-colors w-10 h-10'>
                <svg width="100%" viewBox="0 0 39 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#language-html5-svgrepo-com_clip0-4-261)">
                    <path d="M19.5 29.2667L26.1138 27.3833L27.0075 17.2167H15.2425L14.95 13.8833H27.3L27.625 10.55H11.375L12.285 20.55H23.4812L23.1075 24.85L19.5 25.8333L15.8925 24.8333L15.665 22.0667H12.415L12.8862 27.3833L19.5 29.2667ZM6.61375 5H32.3863L30.0625 32L19.5 35L8.9375 32L6.61375 5Z" fill="currentColor" />
                  </g>
                  <defs>
                    <clipPath id="language-html5-svgrepo-com_clip0-4-261">
                      <rect width="39" height="40" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </i>
            </div>

            <div className="">
              <i className='text-[#D5D5D5] dark:text-[#626262] dark:hover:text-[#3ba4e2] hover:text-[#3ba4e2] transition-colors w-10 h-10'>
                <svg width="100%" viewBox="0 0 39 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#language-css3-svgrepo-com_clip0-4-273)">
                    <path d="M8.125 5L7.06875 10.5667H29.1525L28.4375 14.1667H6.37L5.2975 19.7167H27.3813L26.1463 26.0667L17.2413 29.0833L9.5225 26.0667L10.0588 23.3333H4.63125L3.3475 30L16.1038 35L30.875 30L32.825 20L33.215 17.9833L35.6525 5H8.125Z" fill="currentColor" />
                  </g>
                  <defs>
                    <clipPath id="language-css3-svgrepo-com_clip0-4-273">
                      <rect width="39" height="40" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </i>
            </div>

            <div className="">
              <i className='text-[#D5D5D5] dark:text-[#626262] dark:hover:text-[#eccd53] hover:text-[#eccd53] transition-colors w-10 h-10'>
                <svg width="100%" viewBox="0 0 39 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#language-javascript-svgrepo-com_clip0-4-267)">
                    <path d="M4.875 5H34.125V35H4.875V5ZM12.5613 30C12.9144 30.8077 13.4978 31.4868 14.2345 31.9479C14.9713 32.409 15.8269 32.6306 16.6888 32.5833C17.2461 32.6446 17.8098 32.5765 18.338 32.3841C18.8662 32.1917 19.3454 31.8798 19.7402 31.4717C20.135 31.0636 20.4353 30.5696 20.6187 30.0264C20.8022 29.4831 20.8641 28.9045 20.8 28.3333V18.7667H18.0375V28.3333C18.0375 29.7667 17.4688 30.1333 16.575 30.1333C15.6812 30.1333 15.2425 29.4667 14.8037 28.6833L12.5613 30ZM22.3112 29.7C22.7883 30.6258 23.516 31.3904 24.4069 31.9019C25.2977 32.4135 26.3136 32.6501 27.3325 32.5833C29.9325 32.5833 31.8825 31.2 31.8825 28.65C31.8825 26.1 30.5663 25.3167 28.2263 24.2167L27.5438 23.9167C26.3575 23.4 25.9187 23.05 25.9187 22.25C25.9203 22.0791 25.9564 21.9105 26.0248 21.7547C26.0932 21.5989 26.1924 21.4594 26.3162 21.345C26.4399 21.2306 26.5855 21.1438 26.7437 21.0902C26.9018 21.0365 27.0692 21.0172 27.235 21.0333C27.6155 21.0291 27.9883 21.143 28.3044 21.3602C28.6206 21.5773 28.8652 21.8875 29.0063 22.25L31.135 20.8C30.7665 20.0807 30.2009 19.4877 29.508 19.0939C28.8151 18.7 28.025 18.5226 27.235 18.5833C26.7276 18.5324 26.2155 18.5904 25.7311 18.7536C25.2468 18.9168 24.8009 19.1816 24.4218 19.5312C24.0427 19.8808 23.7388 20.3076 23.5293 20.7843C23.3198 21.2609 23.2093 21.7771 23.205 22.3C23.205 24.6 24.5213 25.6333 26.455 26.55L27.1375 26.85C28.405 27.4167 29.1525 27.7667 29.1525 28.7333C29.1525 29.7 28.4213 30.1167 27.2838 30.1167C26.7243 30.1288 26.1729 29.9789 25.6929 29.6841C25.2129 29.3893 24.8236 28.9615 24.57 28.45L22.3112 29.7Z" fill="currentColor" />
                  </g>
                  <defs>
                    <clipPath id="language-javascript-svgrepo-com_clip0-4-267">
                      <rect width="39" height="40" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </i>
            </div>

            <div className="">
              <i className='text-[#D5D5D5] dark:text-[#626262] dark:hover:text-[#3ba4e2]  hover:text-[#3ba4e2] transition-colors w-10 h-10'>
                <svg width="100%" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#language-typescript-svgrepo-com_clip0-4-264)">
                    <path d="M3.8 3.79999H34.2V34.2H3.8V3.79999ZM21.888 28.8969C22.3838 29.835 23.1402 30.6098 24.066 31.1282C24.9919 31.6465 26.0478 31.8863 27.1067 31.8187C29.8089 31.8187 31.8356 30.4169 31.8356 27.8329C31.8356 25.2489 30.4676 24.4551 28.0356 23.3404L27.3262 23.0364C26.0933 22.5129 25.6373 22.1582 25.6373 21.3475C25.6389 21.1744 25.6764 21.0035 25.7475 20.8456C25.8186 20.6877 25.9218 20.5464 26.0504 20.4304C26.179 20.3145 26.3303 20.2266 26.4947 20.1722C26.6591 20.1179 26.833 20.0983 27.0053 20.1147C27.4008 20.1104 27.7882 20.2258 28.1168 20.4459C28.4454 20.6659 28.6997 20.9803 28.8462 21.3475L31.0587 19.8782C30.6756 19.1494 30.0879 18.5484 29.3677 18.1493C28.6475 17.7502 27.8264 17.5704 27.0053 17.632C26.478 17.5804 25.9457 17.6391 25.4423 17.8045C24.939 17.9699 24.4755 18.2383 24.0815 18.5925C23.6876 18.9468 23.3716 19.3792 23.1539 19.8623C22.9362 20.3453 22.8214 20.8684 22.8169 21.3982C22.8169 23.7289 24.1849 24.776 26.1947 25.7049L26.904 26.0089C28.2213 26.5831 28.9982 26.9378 28.9982 27.9173C28.9982 28.8969 28.2382 29.3191 27.056 29.3191C26.4746 29.3314 25.9015 29.1795 25.4026 28.8808C24.9037 28.582 24.4992 28.1486 24.2356 27.6302L21.9049 28.9813M20.6889 17.7333H12.2444V20.2667H14.7778V32.5111H17.7333V20.2667H20.6889V17.7333Z" fill="currentColor" />
                  </g>
                  <defs>
                    <clipPath id="language-typescript-svgrepo-com_clip0-4-264">
                      <rect width="38" height="38" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </i>
            </div>

            <div className="">
              <i className='text-[#D5D5D5] dark:text-[#626262] dark:hover:text-[#58ce71] hover:text-[#58ce71] transition-colors w-10 h-10'>
                <svg width="100%" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 11.2524L15.6648 3.74377H9.45938L20 22.0008L30.5406 3.74377H24.3352L20 11.2524Z" fill="currentColor" />
                  <path d="M31.9844 3.74377L20 24.5008L8.01561 3.74377H1.22968L20 36.2563L38.7703 3.74377H31.9844Z" fill="currentColor" />
                </svg>
              </i>
            </div>

            <div className="">
              <i className='text-[#D5D5D5] dark:text-[#626262] dark:hover:text-[#48f46d] hover:text-[#48f46d] transition-colors w-10 h-10'>
                <svg width="100%" viewBox="0 0 39 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#nuxt-dot-js-svgrepo-com1_clip0-4-276)">
                    <path d="M21.8793 33.5H36.3773C36.8378 33.5 37.2902 33.3799 37.6889 33.1517C38.0877 32.9235 38.4189 32.5952 38.649 32.2C38.8791 31.8046 39.0002 31.3563 39 30.8999C38.9998 30.4435 38.8784 29.9952 38.6478 29.6001L28.9114 12.8859C28.6813 12.4907 28.3503 12.1624 27.9516 11.9343C27.5529 11.7061 27.1006 11.5859 26.6402 11.5859C26.1798 11.5859 25.7275 11.7061 25.3288 11.9343C24.9301 12.1624 24.599 12.4907 24.3689 12.8859L21.8793 17.1624L17.0118 8.7997C16.7815 8.40454 16.4503 8.07638 16.0515 7.84823C15.6527 7.62012 15.2003 7.5 14.7399 7.5C14.2794 7.5 13.8271 7.62012 13.4283 7.84823C13.0294 8.07638 12.6982 8.40454 12.4679 8.7997L0.352148 29.6001C0.121655 29.9952 0.000200605 30.4435 2.48291e-07 30.8999C-0.000200109 31.3563 0.120861 31.8046 0.351007 32.2C0.581152 32.5952 0.912266 32.9235 1.31105 33.1517C1.70983 33.3799 2.16222 33.5 2.62271 33.5H11.7233C15.3291 33.5 17.9882 31.9303 19.8179 28.8677L24.2601 21.2429L26.6395 17.1624L33.7804 29.4195H24.2601L21.8793 33.5ZM11.5749 29.4153L5.22388 29.4138L14.7441 13.0721L19.4944 21.2429L16.3139 26.7042C15.0988 28.6913 13.7183 29.4153 11.5749 29.4153Z" fill="currentColor" />
                  </g>
                  <defs>
                    <clipPath id="nuxt-dot-js-svgrepo-com1_clip0-4-276">
                      <rect width="39" height="39" fill="white" transform="translate(0 1)" />
                    </clipPath>
                  </defs>
                </svg>
              </i>
            </div>

            <div className="">
              <i className='text-[#D5D5D5] dark:text-[#626262] dark:hover:text-[#8460f1] hover:text-[#8460f1] transition-colors w-10 h-10'>
                <svg width="100%" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M13.6163 7.23767L12.9842 18.8599C12.9617 19.2319 13.3107 19.5207 13.6816 19.437L17.5355 18.46C17.9401 18.3686 18.3056 18.7175 18.2225 19.1158L17.3137 23.9721C17.2273 24.3867 17.6248 24.7411 18.0382 24.6181L19.957 23.9168C20.371 23.7937 20.7689 24.1492 20.6813 24.564L19.4855 33.68C19.3578 34.2851 20.1799 34.6151 20.5227 34.0963L20.7518 33.7498L34.0642 9.39535C34.2761 8.98134 33.9107 8.50926 33.4463 8.59701L29.6534 8.97282C29.2352 9.05177 28.8794 8.67043 28.9974 8.26979L29.4644 6.90557L37.8018 5.40097C38.5837 5.25989 39.1784 6.08364 38.7906 6.77037L21.5007 37.3816C21.1437 38.0136 20.2266 38.0173 19.8642 37.3884L2.23153 6.77332C1.83678 6.08794 2.42872 5.25776 3.21315 5.39658L13.6163 7.23767Z" fill="currentColor" />
                  <path d="M28.4003 3.00796L16.0401 5.20807C15.8526 5.24423 15.7138 5.40062 15.7025 5.58831L15.0008 17.2534C14.9843 17.5282 15.2406 17.7414 15.5131 17.6796L19.6415 16.9581C19.9387 16.8907 20.2072 17.1483 20.1462 17.4424L19.2025 21.9904C19.139 22.2964 19.431 22.5582 19.7347 22.4674L21.6964 21.8808C22.0005 21.7899 22.2928 22.0524 22.2284 22.3587L20.7288 29.5025C20.635 29.9493 21.2389 30.193 21.4907 29.8099L21.659 29.554L30.9547 11.295C31.1103 10.9893 30.8419 10.6407 30.5008 10.7055L27.2315 11.3265C26.9243 11.3848 26.6629 11.1032 26.7496 10.8074L28.8834 3.52684C28.9702 3.2305 28.7079 2.94865 28.4003 3.00796Z" fill="currentColor" />
                  <path d="M28.4003 3.00796L16.0401 5.20807C15.8526 5.24423 15.7138 5.40062 15.7025 5.58831L15.0008 17.2534C14.9843 17.5282 15.2406 17.7414 15.5131 17.6796L19.6415 16.9581C19.9387 16.8907 20.2072 17.1483 20.1462 17.4424L19.2025 21.9904C19.139 22.2964 19.431 22.5582 19.7347 22.4674L21.6964 21.8808C22.0005 21.7899 22.2928 22.0524 22.2284 22.3587L20.7288 29.5025C20.635 29.9493 21.2389 30.193 21.4907 29.8099L21.659 29.554L30.9547 11.295C31.1103 10.9893 30.8419 10.6407 30.5008 10.7055L27.2315 11.3265C26.9243 11.3848 26.6629 11.1032 26.7496 10.8074L28.8834 3.52684C28.9702 3.2305 28.7079 2.94865 28.4003 3.00796Z" fill="currentColor" />
                </svg>
              </i>
            </div>

            <div className="">
              <i className='text-[#D5D5D5] dark:text-[#626262] dark:hover:text-[#6ccc5d]  hover:text-[#6ccc5d] transition-colors w-10 h-10'>
                <svg width="100%" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 1.00004C19.4849 0.999956 18.9781 1.12866 18.5267 1.37423L4.47333 9.41929C4.02545 9.67977 3.65396 10.0515 3.39556 10.4978C3.13717 10.944 3.00082 11.4493 3 11.9638V28.0165C3.00082 28.5309 3.13717 29.0363 3.39556 29.4825C3.65396 29.9288 4.02545 30.3005 4.47333 30.561L8.25111 32.6564C9.22426 33.2414 10.3428 33.5459 11.4811 33.5358C12.0604 33.5795 12.6422 33.4948 13.1843 33.2878C13.7263 33.0808 14.215 32.7568 14.6148 32.3393C15.0146 31.9218 15.3155 31.4213 15.4955 30.8742C15.6755 30.3271 15.7302 29.7471 15.6555 29.1765V13.3296C15.6555 13.2755 15.6448 13.222 15.6239 13.1721C15.603 13.1221 15.5724 13.0767 15.5338 13.0385C15.4952 13.0003 15.4494 12.97 15.399 12.9493C15.3486 12.9286 15.2946 12.918 15.24 12.918H13.3889C13.3327 12.9154 13.2767 12.9242 13.224 12.9438C13.1714 12.9633 13.1234 12.9932 13.0827 13.0317C13.0421 13.0702 13.0098 13.1164 12.9878 13.1676C12.9657 13.2188 12.9544 13.2739 12.9544 13.3296V29.1765C12.9544 30.4113 11.67 31.6274 9.6111 30.5984L5.83333 28.4094C5.76973 28.3649 5.71773 28.3061 5.6816 28.2378C5.64548 28.1695 5.62626 28.0936 5.62555 28.0165V11.9638C5.62288 11.8861 5.64063 11.809 5.67705 11.7401C5.71347 11.6713 5.76732 11.6129 5.83333 11.5709L19.8867 3.54452C19.9498 3.5084 20.0215 3.48938 20.0944 3.48938C20.1674 3.48938 20.239 3.5084 20.3022 3.54452L34.2611 11.5709C34.3271 11.6129 34.3809 11.6713 34.4174 11.7401C34.4538 11.809 34.4715 11.8861 34.4689 11.9638V28.0165C34.4681 28.0936 34.4489 28.1695 34.4128 28.2378C34.3767 28.3061 34.3247 28.3649 34.2611 28.4094L20.2078 36.4358C20.1411 36.4718 20.0664 36.4907 19.9905 36.4907C19.9146 36.4907 19.8399 36.4718 19.7733 36.4358L16.2222 34.3029C16.1597 34.2756 16.0922 34.2614 16.0239 34.2614C15.9556 34.2614 15.888 34.2756 15.8255 34.3029C15.1712 34.7216 14.4585 35.0431 13.71 35.2571C13.4833 35.2571 13.1244 35.4629 13.8422 35.8558L18.5267 38.6061C18.974 38.8641 19.4823 39 20 39C20.5176 39 21.026 38.8641 21.4733 38.6061L35.5266 30.5797C35.9773 30.3176 36.3506 29.9429 36.6091 29.4931C36.8677 29.0433 37.0024 28.5341 37 28.0165V11.9638C36.9991 11.4493 36.8628 10.944 36.6044 10.4978C36.346 10.0515 35.9745 9.67977 35.5266 9.41929L21.4733 1.37423C21.0228 1.12635 20.5154 0.997483 20 1.00004ZM23.7778 12.5064C19.7733 12.5064 17.3744 14.1715 17.3744 16.9779C17.3744 19.7843 19.7544 20.8695 23.6078 21.2437C28.1978 21.6927 28.5566 22.3662 28.5566 23.2643C28.5566 24.8172 27.2911 25.472 24.3444 25.472C20.5666 25.472 19.8111 24.5552 19.5278 22.7217C19.5066 22.6276 19.4542 22.5432 19.3788 22.4821C19.3034 22.4211 19.2096 22.3868 19.1122 22.3849H17.2233C17.1696 22.3849 17.1164 22.3956 17.067 22.4165C17.0176 22.4374 16.973 22.4681 16.9359 22.5066C16.8988 22.5451 16.87 22.5906 16.8512 22.6404C16.8325 22.6903 16.8241 22.7434 16.8267 22.7966C16.8267 25.1165 18.1111 27.9229 24.2689 27.9229C28.7078 27.9229 31.2577 26.183 31.2577 23.152C31.2577 20.1211 29.2178 19.4101 24.8922 18.774C20.5666 18.1379 20.0944 17.9134 20.0944 16.9031C20.0944 15.8928 20.4722 15.0321 23.7022 15.0321C26.5355 15.0321 27.65 15.6495 28.0844 17.5766C28.1022 17.6674 28.1517 17.749 28.2243 17.8072C28.2968 17.8654 28.3878 17.8964 28.4811 17.8947H30.37C30.4241 17.8954 30.4777 17.884 30.5268 17.8614C30.5759 17.8387 30.6191 17.8053 30.6533 17.7637C30.6955 17.7273 30.7266 17.6801 30.7433 17.6273C30.7599 17.5744 30.7615 17.518 30.7478 17.4644C30.5022 14.0405 28.2733 12.5064 23.7778 12.5064Z" fill="currentColor" />
                </svg>
              </i>
            </div>

            <div className="">
              <i className='text-[#D5D5D5] dark:text-[#626262] dark:hover:text-black  hover:text-white transition-colors w-10 h-10'>
                <svg width="100%" viewBox="0 0 39 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#express-svgrepo-com1_clip0-4-286)">
                    <path d="M39 30.98C38.4324 31.2002 37.8058 31.1997 37.2385 30.9787C36.6712 30.7576 36.2025 30.3312 35.9206 29.78L30.3144 21.8284L29.5019 20.7167L22.997 29.79C22.7321 30.3181 22.2887 30.7292 21.7498 30.9463C21.2109 31.1635 20.6133 31.1719 20.0687 30.97L28.4505 19.4367L20.6537 9.01835C21.2144 8.81114 21.8275 8.8084 22.3898 9.01057C22.9522 9.21275 23.4294 9.6075 23.7412 10.1284L29.5522 18.1784L35.3957 10.1617C35.6627 9.643 36.1062 9.243 36.6418 9.03773C37.1775 8.83247 37.7681 8.83625 38.3012 9.04835L35.2755 13.1667L31.1772 18.6384C31.0634 18.7425 30.9724 18.8701 30.91 19.0129C30.8476 19.1556 30.8154 19.3103 30.8154 19.4667C30.8154 19.6231 30.8476 19.7778 30.91 19.9205C30.9724 20.0633 31.0634 20.1909 31.1772 20.295L38.9837 30.9817L39 30.98ZM0.00323898 19.2934L0.685739 15.835C2.56099 8.99669 10.205 6.15168 15.4635 10.385C18.5429 12.8667 19.3115 16.38 19.1604 20.34H1.81349C1.53236 27.4117 6.50811 31.6817 12.87 29.5C13.9013 29.1193 14.8244 28.4821 15.5567 27.6455C16.2889 26.809 16.8074 25.7992 17.0657 24.7067C17.4021 23.5967 17.9562 23.4067 18.9735 23.7267C18.804 25.0807 18.3373 26.3776 17.6086 27.5199C16.8799 28.6622 15.9081 29.6201 14.7664 30.3217C12.8804 31.3797 10.7166 31.7991 8.58425 31.5198C6.45192 31.2405 4.46029 30.2769 2.89411 28.7667C1.34554 26.979 0.409613 24.7208 0.229114 22.3367C0.229114 21.945 0.099114 21.5784 0.011364 21.2267C0.00345353 20.5828 -0.000338223 19.9389 -1.10236e-05 19.295L0.00323898 19.2934ZM1.83461 18.8167H17.5224C17.4249 13.69 14.2707 10.0534 10.0636 10.02C5.38036 9.95335 2.02961 13.51 1.82324 18.7934L1.83461 18.8167Z" fill="currentColor" />
                  </g>
                  <defs>
                    <clipPath id="express-svgrepo-com1_clip0-4-286">
                      <rect width="39" height="40" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </i>
            </div>

            <div className="">
              <i className='text-[#D5D5D5] dark:text-[#626262] dark:hover:text-[#6ccc5d] hover:text-[#6ccc5d] transition-colors w-10 h-10'>
                <svg width="100%" viewBox="0 0 39 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.2669 29.5832C19.2669 29.5832 19.2669 15.7639 19.7015 15.7653C20.0375 15.7653 20.4746 33.5912 20.4746 33.5912C19.8733 33.5165 19.2669 30.6582 19.2669 29.5832ZM27.6905 15.9253C26.5295 10.5689 23.9866 5.96332 20.4797 2.4088L20.4708 2.4008C20.0438 1.71257 19.6535 0.922974 19.3402 0.0906968L19.3099 0C19.3111 0.0266756 19.3111 0.0586862 19.3111 0.0906968C19.3111 0.844281 18.9915 1.51784 18.4875 1.96999L18.4837 1.97266C13.9687 6.01934 11.096 11.9827 11.0013 18.6556V18.6729C11 18.7556 11 18.853 11 18.9503C11 25.5619 14.0129 31.4305 18.6681 35.109L18.7174 35.1464L18.8273 35.2304C19.0303 36.8167 19.2038 38.4066 19.3478 40H20.107C20.3167 38.0113 20.5997 36.2708 20.9698 34.5635L20.9117 34.8823C21.412 34.5155 21.8491 34.1354 22.2571 33.7232L22.2533 33.7272C25.7918 30.2634 28 25.3284 28 19.8506C28 19.7693 28 19.6892 27.9987 19.6079V19.6199C27.9949 18.3114 27.8825 17.0323 27.669 15.7906L27.688 15.9226L27.6905 15.9253Z" fill="currentColor" />
                </svg>
              </i>
            </div>

            <div className="">
              <i className='text-[#D5D5D5] dark:text-[#626262] dark:hover:text-[#efaf65] hover:text-[#efaf65] transition-colors w-10 h-10'>
                <svg width="100%" viewBox="0 0 39 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M33.9466 14.9233L24.4531 5.18639C23.1928 3.91357 21.5103 3.17587 19.7424 3.12092C17.9745 3.06597 16.2515 3.69784 14.9184 4.89005L18.7983 8.86948C19.1914 8.72559 19.6126 8.68165 20.0258 8.74143C20.4391 8.8012 20.832 8.96292 21.1709 9.21269C21.5098 9.46247 21.7846 9.79284 21.9716 10.1755C22.1587 10.5581 22.2524 10.9816 22.2448 11.4095V11.5365C22.2317 11.8119 22.176 12.0834 22.0797 12.3409L27.136 17.421C27.3799 17.3224 27.6378 17.2652 27.8997 17.2517C28.4303 17.2517 28.949 17.4131 29.3902 17.7154C29.8314 18.0178 30.1753 18.4475 30.3784 18.9504C30.5814 19.4532 30.6346 20.0065 30.531 20.5402C30.4275 21.074 30.172 21.5643 29.7968 21.9492C29.4216 22.334 28.9435 22.5961 28.4231 22.7023C27.9026 22.8084 27.3632 22.7539 26.8729 22.5457C26.3827 22.3374 25.9637 21.9847 25.6689 21.5322C25.3741 21.0797 25.2167 20.5476 25.2167 20.0034C25.2299 19.7349 25.2857 19.4704 25.3818 19.2202L20.7383 14.4576V25.528C21.1873 25.7472 21.567 26.0919 21.8335 26.5225C22.1 26.9532 22.2426 27.4522 22.2448 27.9623C22.2448 28.6921 21.9622 29.392 21.459 29.908C20.9559 30.4241 20.2735 30.714 19.5619 30.714C18.8504 30.714 18.1679 30.4241 17.6648 29.908C17.1616 29.392 16.879 28.6921 16.879 27.9623C16.8824 27.4793 17.0127 27.0063 17.256 26.5929C17.4993 26.1794 17.8467 25.8408 18.2617 25.6127V13.8014C17.8587 13.5803 17.5191 13.255 17.2765 12.8577C17.034 12.4604 16.8969 12.0049 16.879 11.5365C16.8922 11.268 16.948 11.0035 17.0441 10.7534L13.1229 6.7316L5.05341 14.9233C4.40258 15.588 3.88616 16.3781 3.53378 17.248C3.1814 18.118 3 19.0508 3 19.9928C3 20.9349 3.1814 21.8676 3.53378 22.7376C3.88616 23.6076 4.40258 24.3976 5.05341 25.0624L14.5469 34.8204C15.195 35.4879 15.9653 36.0176 16.8135 36.379C17.6617 36.7404 18.5712 36.9265 19.4897 36.9265C20.4082 36.9265 21.3176 36.7404 22.1659 36.379C23.0141 36.0176 23.7843 35.4879 24.4325 34.8204L33.9466 25.0835C34.5974 24.4188 35.1138 23.6287 35.4662 22.7588C35.8186 21.8888 36 20.956 36 20.014C36 19.0719 35.8186 18.1392 35.4662 17.2692C35.1138 16.3992 34.5974 15.6092 33.9466 14.9445V14.9233Z" fill="currentColor" />
                </svg>
              </i>
            </div>

            <div className="">
              <i className='text-[#D5D5D5] dark:text-[#626262] dark:hover:text-[#3ba4e2]  hover:text-[#3ba4e2] transition-colors w-10 h-10'>
                <svg width="100%" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M36.6331 15.187C35.8758 14.6797 34.9456 14.3771 33.9462 14.3771C33.8313 14.3771 33.7177 14.3809 33.6053 14.3884L33.6201 14.3872C33.0691 14.3884 32.5305 14.4386 32.0067 14.5316L32.0635 14.5228C31.7732 12.8189 30.7973 11.3899 29.4421 10.516L29.4187 10.5022L28.8887 10.1908L28.5403 10.7031C28.1252 11.346 27.8003 12.0944 27.6064 12.8942L27.5965 12.9432C27.4866 13.35 27.4236 13.8171 27.4236 14.2993C27.4236 15.3427 27.72 16.3146 28.2315 17.1345L28.2191 17.1131C27.4322 17.4886 26.5131 17.7259 25.5458 17.7711H25.5298H1.15752C0.520083 17.7724 0.00370611 18.296 0.00123541 18.9426C5.76693e-08 19.0129 0 19.0971 0 19.1812C0 21.3798 0.391606 23.4855 1.10811 25.4305L1.06858 25.3074C1.7579 27.3579 3.05996 29.043 4.74992 30.1806L4.78451 30.2019C6.93897 31.3358 9.48873 32 12.1904 32C12.4462 32 12.6994 31.9937 12.9527 31.9824L12.9168 31.9837C12.9391 31.9837 12.965 31.9837 12.991 31.9837C14.5623 31.9837 16.0979 31.8317 17.5865 31.5417L17.4345 31.5668C19.652 31.1449 21.6285 30.3878 23.4198 29.3406L23.3284 29.3895C24.8812 28.4666 26.208 27.3541 27.3371 26.0596L27.3519 26.042C28.9887 24.0832 30.3205 21.7967 31.2371 19.3055L31.2877 19.1485H31.6287C31.6966 19.151 31.7757 19.1536 31.8548 19.1536C33.3693 19.1536 34.7455 18.5496 35.7622 17.5652L35.7597 17.5677C36.2254 17.1182 36.5948 16.572 36.8382 15.9592L36.8493 15.9291L37 15.4783L36.6331 15.187ZM3.41575 17.0479H6.68448C6.84137 17.0466 6.96862 16.9173 6.96862 16.7578V13.8008C6.96862 13.6413 6.84137 13.5107 6.68448 13.5095H3.41575C3.25886 13.5107 3.13161 13.64 3.13161 13.7995V16.7578C3.13161 16.9173 3.25886 17.0479 3.41575 17.0479ZM7.91737 17.0479H11.1836C11.3405 17.0479 11.469 16.9185 11.469 16.7578V13.8008C11.469 13.6413 11.3418 13.5107 11.1849 13.5095H7.91613C7.758 13.5095 7.62953 13.64 7.62953 13.8008V16.7578C7.63076 16.9185 7.75924 17.0479 7.91737 17.0479ZM12.4857 17.0479H15.7544C15.9113 17.0466 16.0386 16.9173 16.0386 16.7578V13.8008C16.0386 13.6413 15.9113 13.5107 15.7544 13.5095H12.4857C12.3288 13.5107 12.2016 13.64 12.2016 13.7995V16.7578C12.2016 16.9173 12.3288 17.0479 12.4869 17.0479H12.4857ZM17.0021 17.0479H20.2672C20.4253 17.0479 20.5525 16.9185 20.5538 16.7578V13.8008C20.5538 13.64 20.4253 13.5095 20.2672 13.5095H17.0021C16.8452 13.5095 16.7168 13.6388 16.7168 13.7995V16.7578C16.7168 16.9173 16.844 17.0479 17.0009 17.0479C17.0009 17.0479 17.0009 17.0479 17.0021 17.0479ZM7.91737 12.7937H11.1836C11.3418 12.7925 11.469 12.6632 11.469 12.5024V9.54541C11.469 9.38595 11.3418 9.25536 11.1836 9.25536H7.91737C7.75924 9.25536 7.632 9.38469 7.63076 9.54541V12.5024C7.632 12.6632 7.75924 12.7925 7.91737 12.7937ZM12.4857 12.7937H15.7544C15.9113 12.7925 16.0386 12.6619 16.0386 12.5024V9.54541C16.0386 9.38595 15.9113 9.25536 15.7532 9.25536H12.4882C12.3313 9.25536 12.2028 9.38469 12.2028 9.54541V12.5024C12.204 12.6632 12.33 12.7925 12.4882 12.7937H12.4857ZM17.0021 12.7937H20.2672C20.4253 12.7925 20.5525 12.6632 20.5538 12.5024V9.54541C20.5525 9.38469 20.4253 9.25536 20.2672 9.25536H17.0021C16.8452 9.25536 16.7168 9.38469 16.7168 9.54541V12.5024C16.7168 12.6632 16.844 12.7925 17.0021 12.7937ZM17.0021 8.53965H20.2672C20.4253 8.53965 20.5538 8.40906 20.5538 8.24834V5.29005C20.5525 5.12933 20.4253 5 20.2672 5H17.0021C16.8452 5 16.7168 5.12933 16.7168 5.29005V8.24834C16.7168 8.4078 16.844 8.53839 17.0009 8.53839C17.0009 8.53839 17.0009 8.53839 17.0021 8.53839V8.53965ZM21.5569 17.0479H24.8231C24.9813 17.0479 25.1085 16.9185 25.1097 16.7578V13.8008C25.1097 13.64 24.9813 13.5095 24.8231 13.5095H21.5569C21.3988 13.5095 21.2715 13.6388 21.2715 13.7995V16.7578C21.2715 16.9173 21.3988 17.0479 21.5569 17.0479Z" fill="currentColor" />
                </svg>
              </i>
            </div>

          </div>
          <div className="inline-flex flex-wrap gap-x-3 gap-y-2">

            {keySkillsTags.map(item => (
              <div key={item} className="border-2 border-solid border-[#2F2F2F] text-[#A7A7A7] dark:text-[#636363] dark:border-[#F0F0F0] text-base py-1.5 px-3 rounded-xl">
                {item}
              </div>
            ))}

          </div>
        </div>
      </section>

      <section className='container'>
        <h3 className='text-base mb-3'>Places of work and experience</h3>

        <article className={styles.line + ' relative pl-7'}>
          {/* border-l border-[#3E3E3E] border-solid pl-7 */}
          <section className="">
            <h3 className='text-white dark:text-black text-3xl font-semibold mb-2'><span>Fullstack JS Developer</span> <span className='text-[#959595]'>in</span> <span>ООО Спектр</span></h3>
            <p className='text-[#959595] mb-5'>September 2021 — currently, <span className='text-white dark:text-black '>{calcDate('September 1, 2021')}</span></p>

            <div className="flex gap-16">
              <section className='space-y-10'>
                <section className="flex gap-10 mb-5">
                  <a href="https://spektrtruck.ru" className='text-[#8FE4A7] dark:text-[#188E39] font-medium relative group'>Spektrtruck.ru
                    <i className='absolute -right-2 top-1 w-1.5 h-1.5 text-[#8FE4A7] dark:text-[#188E39]'>
                      <svg width="100%" className='group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform' viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M1.00001 0H6.50001V5.5H4.50001V3.41421L1.70712 6.20711L0.292908 4.79289L3.0858 2H1.00001V0Z" fill="currentColor" />
                      </svg>
                    </i></a>

                  <a href="https://spektrtruck.ru" className='text-[#8FE4A7] dark:text-[#188E39] font-medium relative group'>Design sistem presentation
                    <i className='absolute -right-2 top-1 w-1.5 h-1.5 text-[#8FE4A7] dark:text-[#188E39]'>
                      <svg width="100%" className='group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform' viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M1.00001 0H6.50001V5.5H4.50001V3.41421L1.70712 6.20711L0.292908 4.79289L3.0858 2H1.00001V0Z" fill="currentColor" />
                      </svg>
                    </i></a>
                </section>

                <section className="">
                  <h3 className='text-base mb-3'>About company</h3>
                  <p className='text-[0.85rem]'>SPEKTR Ltd. is engaged in: delivery of various world brands of warehouse equipment to the Russian market, service maintenance of various equipment for warehousing.</p>
                </section>

                <section>
                  <h3 className='text-base mb-3'>Achievements</h3>
                  <section className='space-y-3 max-h-52 overflow-hidden relative'>
                    <div className="group bg-gradient-to-t from-[#1A1A1A] dark:from-white to-transparent absolute bottom-0 right-0 w-full h-[100px] flex justify-center items-center">
                      <button className="py-2 px-4 bg-[#2F2F2F] dark:bg-[#626262] hover:bg-[#3a3a3a] transition-all rounded-lg text-white flex gap-1 justify-center items-center text-sm opacity-0 group-hover:opacity-100"><span className="font-medium">Show full text</span></button>
                    </div>
                    <p className='text-[0.85rem]'>The old site was outdated and had low traffic, the restart of the site and the development of a new design led to a sharp increase in attendance in the first month after the launch, thereafter the dynamics was only positive;</p>
                    <p className='text-[0.85rem]'>SPA - frontend and backend systems, allowed to speed up site loading and improve the user experience, which many times led to an increase in the time spent by users on the site</p>
                    <p className='text-[0.85rem]'>Development of crm for internal employees greatly simplified the processes of internal management and processing of service orders + overall integration of the spare parts manager and service manager's office, improving the performance of sales managers;</p>
                    <p className='text-[0.85rem]'>Creation of the news section of the site in the format of "magazine" in the future will help to increase the awareness of users about the novelties of the company and improve communication between the company and customers.</p>
                  </section>
                </section>
              </section>

              <section className='space-y-10' style={{ flex: '0 0 55%' }}>
                <h3>What was done?</h3>


                <div className="flex gap-10 justify-start items-start">

                  <section className='text-xs'>
                    <h2 className='w-max bg-[#2B2B2B] dark:bg-[#F2F2F2] px-3 py-1 rounded-lg'>Design sistem</h2>
                    <ul className='border-l border-solid border-[#363636] dark:border-[#E0E0E0] pt-2 pl-2 pr-2 m-2 space-y-2'>
                      <li className='w-max bg-[#2B2B2B] dark:bg-[#F2F2F2] px-3 py-1 rounded-lg'>Company logo</li>
                      <li className='w-max bg-[#2B2B2B] dark:bg-[#F2F2F2] px-3 py-1 rounded-lg'>Corporate identity</li>
                      <li className='w-max bg-[#2B2B2B] dark:bg-[#F2F2F2] px-3 py-1 rounded-lg'>Site Design</li>
                      <li className='w-max bg-[#2B2B2B] dark:bg-[#F2F2F2] px-3 py-1 rounded-lg'>CRM Design</li>
                      <li className='w-max bg-[#2B2B2B] dark:bg-[#F2F2F2] px-3 py-1 rounded-lg'>News Design</li>
                    </ul>
                  </section>

                  <section className='text-xs'>
                    <h2 className='w-max bg-[#2B2B2B] dark:bg-[#F2F2F2] px-3 py-1 rounded-lg'>Frontend</h2>
                    <ul className='border-l border-solid border-[#363636] dark:border-[#E0E0E0] pt-2 pl-2 pr-2 m-2 space-y-2'>
                      <li className='w-max'>
                        <h2 className='w-max bg-[#2B2B2B] dark:bg-[#F2F2F2] px-3 py-1 rounded-lg'>SPA</h2>
                        <ol className='border-l border-solid border-[#363636] dark:border-[#E0E0E0] pt-2 pl-2 pr-2 m-2 space-y-2'>
                          <li className='w-max bg-[#2B2B2B] dark:bg-[#F2F2F2] px-3 py-1 rounded-lg'>Vue 3</li>
                          <li className='w-max bg-[#2B2B2B] dark:bg-[#F2F2F2] px-3 py-1 rounded-lg'>Vue Router</li>
                          <li className='w-max bg-[#2B2B2B] dark:bg-[#F2F2F2] px-3 py-1 rounded-lg'>Pinia</li>
                          <li className='w-max bg-[#2B2B2B] dark:bg-[#F2F2F2] px-3 py-1 rounded-lg'>Vite</li>
                        </ol>
                      </li>
                      <li className='w-max bg-[#2B2B2B] dark:bg-[#F2F2F2] px-3 py-1 rounded-lg'>One-page sites</li>
                      <li className='w-max'>
                        <h2 className='w-max bg-[#2B2B2B] dark:bg-[#F2F2F2] px-3 py-1 rounded-lg'>CRM</h2>
                        <ol className='border-l border-solid border-[#363636] dark:border-[#E0E0E0] pt-2 pl-2 pr-2 m-2 space-y-2'>
                          <li className='w-max bg-[#2B2B2B] dark:bg-[#F2F2F2] px-3 py-1 rounded-lg'>Sales</li>
                          <li className='w-max bg-[#2B2B2B] dark:bg-[#F2F2F2] px-3 py-1 rounded-lg'>Service</li>
                          <li className='w-max bg-[#2B2B2B] dark:bg-[#F2F2F2] px-3 py-1 rounded-lg'>Spare parts purch.</li>
                        </ol>
                      </li>
                      <li className='w-max bg-[#2B2B2B] dark:bg-[#F2F2F2] px-3 py-1 rounded-lg'>News (Journal)</li>
                    </ul>
                  </section>

                  <section className='text-xs'>
                    <h2 className='w-max bg-[#2B2B2B] dark:bg-[#F2F2F2] px-3 py-1 rounded-lg'>Backend</h2>
                    <ul className='border-l border-solid border-[#363636] dark:border-[#E0E0E0] pt-2 pl-2 pr-2 m-2 space-y-2'>
                      <li className='w-max bg-[#2B2B2B] dark:bg-[#F2F2F2] px-3 py-1 rounded-lg'>Express</li>
                      <li className='w-max bg-[#2B2B2B] dark:bg-[#F2F2F2] px-3 py-1 rounded-lg'>REST API</li>
                      <li className='w-max bg-[#2B2B2B] dark:bg-[#F2F2F2] px-3 py-1 rounded-lg'>Auth</li>
                      <li className='w-max bg-[#2B2B2B] dark:bg-[#F2F2F2] px-3 py-1 rounded-lg'>MongoDb</li>
                    </ul>
                  </section>

                </div>



              </section>
            </div>
          </section>



        </article>

        <article className={styles.line + ' relative pl-7'}>
          {/* border-l border-[#3E3E3E] border-solid pl-7 */}
          <section className="">
            <h3 className='text-white dark:text-black  text-3xl font-semibold mb-2'><span>Fullstack JS Developer</span> <span className='text-[#959595]'>in</span> <span>own project (IE)</span></h3>
            <p className='text-[#959595] mb-5'>April 2022 — currently, <span className='text-white dark:text-black '>{calcDate('April 3, 2022')}</span></p>

            <div className="flex gap-16">
              <section className='space-y-10'>
                <section className="flex gap-10 mb-5">
                  <a href="https://playloop.ru" className='text-[#8FE4A7] dark:text-[#188E39] font-medium relative group'>Playloop.ru
                    <i className='absolute -right-2 top-1 w-1.5 h-1.5 text-[#8FE4A7] dark:text-[#188E39]'>
                      <svg width="100%" className='group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform' viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M1.00001 0H6.50001V5.5H4.50001V3.41421L1.70712 6.20711L0.292908 4.79289L3.0858 2H1.00001V0Z" fill="currentColor" />
                      </svg>
                    </i></a>

                  <a href="https://playloop.ru" className='text-[#8FE4A7] dark:text-[#188E39] font-medium relative group'>Design sistem presentation
                    <i className='absolute -right-2 top-1 w-1.5 h-1.5 text-[#8FE4A7] dark:text-[#188E39]'>
                      <svg width="100%" className='group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform' viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M1.00001 0H6.50001V5.5H4.50001V3.41421L1.70712 6.20711L0.292908 4.79289L3.0858 2H1.00001V0Z" fill="currentColor" />
                      </svg>
                    </i></a>
                </section>

                <section className="">
                  <h3 className='text-base mb-3'>About own project</h3>
                  <p className='text-[0.85rem]'>Development of a personal commerce project "Playloop", an interactive PWA web companion application that creates an immersive audio narration and atmosphere for various board games.</p>
                </section>

                <section>
                  <h3 className='text-base mb-3'>Achievements</h3>
                  <section className='space-y-3 max-h-52 overflow-hidden relative'>
                    <div className="group bg-gradient-to-t from-[#1A1A1A] dark:from-white to-transparent absolute bottom-0 right-0 w-full h-[100px] flex justify-center items-center">
                      <button className="py-2 px-4 bg-[#2F2F2F] hover:bg-[#3a3a3a] transition-all rounded-lg text-white flex gap-1 justify-center items-center text-sm opacity-0 group-hover:opacity-100"><span className="font-medium">Show full text</span></button>
                    </div>
                    <p className='text-[0.85rem]'>In progress.</p>
                  </section>
                </section>
              </section>

              <section className='space-y-10' style={{ flex: '0 0 55%' }}>
                <h3>What was done?</h3>


                <div className="flex gap-10 justify-start items-start">

                  <section className='text-xs'>
                    <h2 className='w-max bg-[#2B2B2B] dark:bg-[#F2F2F2] px-3 py-1 rounded-lg'>Design sistem</h2>
                    <ul className='border-l border-solid border-[#363636] dark:border-[#E0E0E0] pt-2 pl-2 pr-2 m-2 space-y-2'>
                      <li className='w-max bg-[#2B2B2B] dark:bg-[#F2F2F2] px-3 py-1 rounded-lg'>App Design</li>
                      <li className='w-max bg-[#2B2B2B] dark:bg-[#F2F2F2] px-3 py-1 rounded-lg'>Project logo</li>
                      <li className='w-max bg-[#2B2B2B] dark:bg-[#F2F2F2] px-3 py-1 rounded-lg'>Presentation page</li>
                      <li className='w-max bg-[#2B2B2B] dark:bg-[#F2F2F2] px-3 py-1 rounded-lg'>UI kit</li>
                    </ul>
                  </section>

                  <section className='text-xs'>
                    <h2 className='w-max bg-[#2B2B2B] dark:bg-[#F2F2F2] px-3 py-1 rounded-lg'>Frontend</h2>
                    <ul className='border-l border-solid border-[#363636] dark:border-[#E0E0E0] pt-2 pl-2 pr-2 m-2 space-y-2'>
                      <li className='w-max'>
                        <h2 className='w-max bg-[#2B2B2B] dark:bg-[#F2F2F2] px-3 py-1 rounded-lg'>SPA</h2>
                        <ol className='border-l border-solid border-[#363636] dark:border-[#E0E0E0] pt-2 pl-2 pr-2 m-2 space-y-2'>
                          <li className='w-max bg-[#2B2B2B] dark:bg-[#F2F2F2] px-3 py-1 rounded-lg'>Vue 3</li>
                          <li className='w-max bg-[#2B2B2B] dark:bg-[#F2F2F2] px-3 py-1 rounded-lg'>Vue Router</li>
                          <li className='w-max bg-[#2B2B2B] dark:bg-[#F2F2F2] px-3 py-1 rounded-lg'>Pinia</li>
                          <li className='w-max bg-[#2B2B2B] dark:bg-[#F2F2F2] px-3 py-1 rounded-lg'>Vite</li>
                          <li className='w-max bg-[#2B2B2B] dark:bg-[#F2F2F2] px-3 py-1 rounded-lg'>Axios</li>
                          <li className='w-max bg-[#2B2B2B] dark:bg-[#F2F2F2] px-3 py-1 rounded-lg'>Web Audio API</li>
                          <li className='w-max bg-[#2B2B2B] dark:bg-[#F2F2F2] px-3 py-1 rounded-lg'>Howler.js</li>
                          <li className='w-max bg-[#2B2B2B] dark:bg-[#F2F2F2] px-3 py-1 rounded-lg'>CSS animations</li>
                          <li className='w-max bg-[#2B2B2B] dark:bg-[#F2F2F2] px-3 py-1 rounded-lg'>CSS transitions</li>
                          <li className='w-max bg-[#2B2B2B] dark:bg-[#F2F2F2] px-3 py-1 rounded-lg'>PWA</li>
                        </ol>
                      </li>
                      <li className='w-max bg-[#2B2B2B] dark:bg-[#F2F2F2] px-3 py-1 rounded-lg'>Presentation page</li>
                      <li className='w-max bg-[#2B2B2B] dark:bg-[#F2F2F2] px-3 py-1 rounded-lg'>UI kit</li>
                    </ul>
                  </section>

                  <section className='text-xs'>
                    <h2 className='w-max bg-[#2B2B2B] dark:bg-[#F2F2F2] px-3 py-1 rounded-lg'>Backend</h2>
                    <ul className='border-l border-solid border-[#363636] dark:border-[#E0E0E0] pt-2 pl-2 pr-2 m-2 space-y-2'>
                      <li className='w-max bg-[#2B2B2B] dark:bg-[#F2F2F2] px-3 py-1 rounded-lg'>Express</li>
                      <li className='w-max bg-[#2B2B2B] dark:bg-[#F2F2F2] px-3 py-1 rounded-lg'>REST API</li>
                      <li className='w-max bg-[#2B2B2B] dark:bg-[#F2F2F2] px-3 py-1 rounded-lg'>Auth</li>
                      <li className='w-max bg-[#2B2B2B] dark:bg-[#F2F2F2] px-3 py-1 rounded-lg'>MongoDb</li>
                    </ul>
                  </section>

                </div>



              </section>
            </div>
          </section>



        </article>
      </section>


      <section className='container'>
        <div className="flex justify-center items-center">
          <div className="p-40 space-y-6 flex flex-col justify-center items-center">
            <p className={styles.gradientFill + ` text-[4.5rem] leading-[4rem] font-semibold`} >Lets <br /> work?</p>

            <CopyEmail email="work@drxid.ru" />
          </div>
        </div>
      </section>

    </main>
  )
}

export default Content