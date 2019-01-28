import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav() {
  return (
      <div className='row'>
        <nav className='nav'>
          <ul>
            <li>
              <NavLink to='/home' exact activeClassName='active'>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/new' exact activeClassName=''>
                New Question
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
  )
}