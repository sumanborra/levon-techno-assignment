import React from 'react'

const LevonContext = React.createContext({
  isDarkMode:false,
  changeIsDarkMode: () => {},
  
})

export default LevonContext
