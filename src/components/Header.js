import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { startLogout } from '../actions/auth'

export const Header = ({ title, startLogout }) => {
  return (
    <header className='header'>
      <div className='content-container'>
        <div className='header__content'>
          <Link to='/dashboard' className='header__title'>
            <h1>{title}</h1>
          </Link>
          <button onClick={startLogout}>Logout</button>
        </div>
      </div>
    </header>
  )
}

Header.defaultProps = {
  title: 'Expensify'
}

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header)
