import React, { useState } from 'react'

import { Achievements as Achievement, HideText, ShowText } from '../../LanguageDictionary'

import { ReactSVG } from 'react-svg'
import AdaptiveIcon from '../../assets/svg/adaptive.svg'
import AiIcon from '../../assets/svg/ai.svg'
import CrmIcon from '../../assets/svg/crm.svg'
import SpektrIcon from '../../assets/svg/spektr.svg'
import VolumeIcon from '../../assets/svg/volume.svg'
import ChartsIcon from '../../assets/svg/charts.svg'
import SpaIcon from '../../assets/svg/spa.svg'

interface Achievement {
  text: string,
  icon: string
}

interface AchievementsProps {
  texts: Achievement[]
}

const Achievements: React.FC<AchievementsProps> = ({ texts }) => {
  const [showFullText, setShowFullText] = useState(false)

  const toggleFullText = () => {
    setShowFullText(!showFullText)
  }

  return (
    <section className='pb-10'>
      <h3 className='text-base mb-3'><Achievement /></h3>
      <section className="space-y-3 relative">
        <div className={` group absolute bottom-0 right-0 w-full h-[100px] flex justify-center items-center ${showFullText ? '' : 'bg-gradient-to-t from-[#1A1A1A] dark:from-white to-transparent'}`}>
          <button onClick={toggleFullText} className={`py-2 px-4 bg-[#2F2F2F] dark:bg-[#626262] hover:bg-[#3a3a3a] transition-all rounded-lg text-white flex gap-1 justify-center items-center text-sm md:opacity-0 group-hover:opacity-100 ${showFullText ? 'translate-y-20 md:translate-y-0 ' : 'translate-y-0'}`}>
            <span className="font-medium">{showFullText ? HideText() : ShowText()}</span>
          </button>
        </div>
        <div className="space-y-5">
          {showFullText ? (
            <>
              {texts.map((achievement, index) => (
                <>
                  <div className='space-y-2'>
                    {achievement.icon === 'Adaptive' && <ReactSVG className='w-8' src={AdaptiveIcon} />}
                    {achievement.icon === 'Ai' && <ReactSVG className='w-12' src={AiIcon} />}
                    {achievement.icon === 'Crm' && <ReactSVG className='w-10' src={CrmIcon} />}
                    {achievement.icon === 'Spektr' && <ReactSVG className='w-10' src={SpektrIcon} />}
                    {achievement.icon === 'Volume' && <ReactSVG className='w-10' src={VolumeIcon} />}
                    {achievement.icon === 'Charts' && <ReactSVG className='w-8' src={ChartsIcon} />}
                    {achievement.icon === 'Spa' && <ReactSVG className='w-8' src={SpaIcon} />}
                    <p key={index} className='text-[0.85rem]'>{achievement.text}</p>
                  </div>
                </>
              ))}
            </>
          ) : (
            <>
              {texts.slice(0, 2).map((achievement, index) => (
                <div className='space-y-2' key={index}>
                  {achievement.icon === 'Adaptive' && <ReactSVG className='w-8' src={AdaptiveIcon} />}
                  {achievement.icon === 'Ai' && <ReactSVG className='w-12' src={AiIcon} />}
                  {achievement.icon === 'Crm' && <ReactSVG className='w-10' src={CrmIcon} />}
                  {achievement.icon === 'Spektr' && <ReactSVG className='w-10' src={SpektrIcon} />}
                  {achievement.icon === 'Volume' && <ReactSVG className='w-10' src={VolumeIcon} />}
                  {achievement.icon === 'Charts' && <ReactSVG className='w-8' src={ChartsIcon} />}
                  {achievement.icon === 'Spa' && <ReactSVG className='w-8' src={SpaIcon} />}
                  <p className='text-[0.85rem]'>{achievement.text}</p>
                </div>
              ))}
            </>
          )}
        </div>
      </section>
    </section>
  )
}

export default Achievements