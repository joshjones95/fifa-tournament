import React from 'react'

import './layout.scss'

export const Centre:React.FC = ({ children }) => {

  return (
    <div className="layout-centre">
      { children }
    </div>
  )
}