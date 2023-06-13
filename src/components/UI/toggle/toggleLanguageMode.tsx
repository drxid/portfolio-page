import React from 'react'
import { useLanguage } from '../../../LanguageProvider'

type Props = {
  size?: string
}

const LanguageMode: React.FC<Props> = (props: Props) => {


  const [language, setLanguage] = useLanguage()

  const handleLanguageChange = (language: string) => {
    language === 'en' ? setLanguage('ru') : setLanguage('en')
  }

  return (
    <div>

      <button onClick={() => handleLanguageChange(language)} className="group border border-solid border-[#2F2F2F] dark:border-[#E0E0E0] inline-flex rounded-full p-0.5 gap-0.5">
        <div className={`${props.size === 'small' ? 'p-1.5' : 'p-2'} ${language === 'en' ? 'bg-[#2F2F2F] dark:bg-[#6d6d6d] group-hover:bg-[#343434]' : 'bg-transparent'} rounded-full flex justify-center items-center transition-colors`}>
          <i className={`${props.size === 'small' ? 'h-4 w-4' : 'h-5 w-5'} ${language === 'en' ? 'text-white' : ''}`}>
            <svg width="100%" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.44 14V2.8H8.744V4.56H2.408V7.472H8.024V9.232H2.408V12.24H8.824V14H0.44ZM10.9348 14V5.552H12.8708V6.864C13.5428 5.872 14.4228 5.376 15.5108 5.376C16.4494 5.376 17.1854 5.66933 17.7188 6.256C18.2521 6.84267 18.5188 7.632 18.5188 8.624V14H16.5828V9.2C16.5828 8.53867 16.4228 8.032 16.1028 7.68C15.7934 7.31733 15.3508 7.136 14.7748 7.136C14.2094 7.136 13.7508 7.32267 13.3988 7.696C13.0468 8.06933 12.8708 8.58133 12.8708 9.232V14H10.9348Z" fill="currentColor" />
            </svg>
          </i>
        </div>
        <div className={`${props.size === 'small' ? 'p-1.5' : 'p-2'} ${language === 'ru' ? 'bg-[#2F2F2F] dark:bg-[#6d6d6d] group-hover:bg-[#343434]' : 'bg-transparent'} rounded-full flex justify-center items-center transition-colors`}>
          <i className={`${props.size === 'small' ? 'h-4 w-4' : 'h-5 w-5'} ${language === 'ru' ? 'text-white' : ''}`}>
            <svg width="100%" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.44 14V2.8H4.856C6.15733 2.8 7.192 3.14133 7.96 3.824C8.728 4.50667 9.112 5.424 9.112 6.576C9.112 7.78133 8.68533 8.72 7.832 9.392C6.98933 10.064 5.92267 10.4 4.632 10.4H2.408V14H0.44ZM2.408 8.624H4.696C5.432 8.624 6.01867 8.43733 6.456 8.064C6.89333 7.69067 7.112 7.2 7.112 6.592C7.112 5.952 6.89333 5.46133 6.456 5.12C6.02933 4.768 5.44267 4.592 4.696 4.592H2.408V8.624ZM12.6315 16.608C11.9275 16.608 11.2608 16.4373 10.6315 16.096L11.2875 14.656C11.6822 14.8693 12.0608 14.976 12.4235 14.976C12.7008 14.976 12.9302 14.9013 13.1115 14.752C13.2928 14.6133 13.4635 14.3627 13.6235 14L10.1035 5.552H12.1675L14.5675 11.824L16.7595 5.552H18.7755L15.4155 14.24C15.0742 15.104 14.6955 15.712 14.2795 16.064C13.8635 16.4267 13.3142 16.608 12.6315 16.608Z" fill="currentColor" />
            </svg>
          </i>
        </div>
      </button>
    </div>
  )
}

export default LanguageMode