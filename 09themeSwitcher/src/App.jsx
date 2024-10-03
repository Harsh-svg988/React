import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeContext } from './contexts/theme'
import ThemeBtn from './components/ThemeBtn.jsx'
import Card from './components/Card.jsx'
// import { ThemeProvider } from './contexts/theme'

function App() {
  const[themeMode,setThemeMode] = useState('light')
  const lightMode = ()=>{
    setThemeMode('light');
  }
  const darkMode = ()=>{
    setThemeMode('dark');
  }
  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  return (
    <ThemeContext.Provider value={{themeMode,lightMode,darkMode}}>
      <div className="flex flex-wrap min-h-screen items-center">
                  <div className="w-full">
                      <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                          <ThemeBtn/>
                      </div>
                      <div className="w-full max-w-sm mx-auto">
                        <Card/>
                      </div>
                  </div>
      </div>
      </ThemeContext.Provider>

  )
}

export default App
