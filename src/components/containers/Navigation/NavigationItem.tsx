import React, { ReactNode } from 'react'
import classNames from 'classnames'

import './Navigation.scss'

export interface NavigationItemProps {
  children: ReactNode
  isActive?: boolean
}

export const NavigationItem:React.FC<NavigationItemProps> = ({children, isActive}) => {
  const classes = classNames(
    'kush-nav__item',
    {'kush-nav__item--active': isActive}
  )
  
  return (
  <li className={classes}>
    {children}
  </li>
  )
}