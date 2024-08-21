import { useState } from 'react'
import { ThemeContext } from './Contexts/ThemeContext'  // named export use curly braces and {samename as passed}

import './App.css'
import Home from './Pages/Home'
import Header from './Components/Header'

function App() {
  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  // pass props within {object}
 return(
  <ThemeContext.Provider value={{theme, setTheme}}>  
     <div className={`${theme} ${theme == 'dark' ? 'bg-black text-white' : 'bg-yellow-600'}`}>
      <Header/>
       <Home/>
     </div>
  </ThemeContext.Provider>
 )
}

export default App
