import React from 'react'
import { MdCopyright } from 'react-icons/md'

import '../footer/Footer.scss'

export const Footer = () => {
  return (
    <div className='footer'>
      <div>Movie App</div>
    <div><MdCopyright />2022, Movie, Inc. or Affiliates</div>
    </div>
  )
}
