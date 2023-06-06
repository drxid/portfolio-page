import React, { useState } from 'react'

interface Achievement {
  text: string
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
      <h3 className='text-base mb-3'>Achievements</h3>
      <section className="space-y-3 relative">
        <div className={` group absolute bottom-0 right-0 w-full h-[100px] flex justify-center items-center ${showFullText ? '' : 'bg-gradient-to-t from-[#1A1A1A] dark:from-white to-transparent'}`}>
          <button onClick={toggleFullText} className={`py-2 px-4 bg-[#2F2F2F] dark:bg-[#626262] hover:bg-[#3a3a3a] transition-all rounded-lg text-white flex gap-1 justify-center items-center text-sm md:opacity-0 group-hover:opacity-100 ${showFullText ? 'translate-y-20 md:translate-y-0 ' : 'translate-y-0'}`}>
            <span className="font-medium">{showFullText ? 'Hide' : 'Show'} full text</span>
          </button>
        </div>
        {showFullText ? (
          <>
            {texts.map((achievement, index) => (
              <p key={index} className='text-[0.85rem]'>{achievement.text}</p>
            ))}
          </>
        ) : (
          <p className='text-[0.85rem]'>{texts[0].text}</p>
        )}
      </section>
    </section>
  )
}

export default Achievements