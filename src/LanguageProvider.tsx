import React, { createContext, useContext, useState } from 'react'
import Russian from './lang/ru.json'
import English from './lang/en.json'

type Translations = {
  [key: string]: {
    [key: string]: string
  }
}

const translations: Translations = {
  ru: Russian,
  en: English,
}

type LanguageContextType = {
  language: string
  setLanguage: (language: string) => void
  translate: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState('en')

  const translate = (key: string) => {
    if (translations[language] && translations[language][key]) {
      return translations[language][key]
    }
    // Если перевод не найден, возвращаем ключ
    return key
  }

  const contextValue: LanguageContextType = {
    language,
    setLanguage,
    translate,
  }

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useTranslation() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider')
  }
  return context.translate
}

export function useLanguage(): [string, (language: string) => void] {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return [context.language, context.setLanguage]
}