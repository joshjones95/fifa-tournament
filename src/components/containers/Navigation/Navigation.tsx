import React from 'react'

import './Navigation.scss'

export const Navigation:React.FC = ({ children }) => {
  return (
    <ul className="kush-nav">
      { children }
    </ul>
  )
}