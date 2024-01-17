import React from 'react'
import carrot from '../assets/carrot.svg'

export default function Header() {
  return (
    <div className='header'>
      <h1 className='logomenu'>
        <a className='logoimg' href='/'>
          <img src={carrot} alt='carrot'/>
          ToDo
        </a>
      </h1>
      <div className='menu'>
        <a href='/'>Home</a>
        <a href='/about'>About</a>
      </div>
    </div>
  )
}
