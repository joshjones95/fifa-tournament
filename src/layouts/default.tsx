import React from 'react'

export const Main:React.FC = ({ children }) => {

  return (
    <div className="site-main">
      { children }
    </div>
  )
}