import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { startLogout } from '../actions/auth'

export const Header = (props) => {
  return (
    <div className="header">
      <h1 className="header__title">{props.title}</h1>
      <p>
        |&nbsp;<NavLink className="header__link" activeClassName="header__link--active" to="/dashboard">Go Home</NavLink>&nbsp;
          |&nbsp;<NavLink className="header__link" activeClassName="header__link--active" to="/create">Add Expense</NavLink>&nbsp;
          |&nbsp;<NavLink className="header__link" activeClassName="header__link--active" to="/help">Help</NavLink>&nbsp;|
      </p>
      <button onClick={props.startLogout}>Logout</button>
    </div>
  )
}

Header.defaultProps = {
  title: 'Expensify'
}

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header)
