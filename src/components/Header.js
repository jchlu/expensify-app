import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = (props) => {
  return (
    <div className="header">
      <h1 className="header__title">{props.title}</h1>
      <p>
        |&nbsp;<NavLink className="header__link" activeClassName="header__link--active" to="/" exact={true}>Go Home</NavLink>&nbsp;
          |&nbsp;<NavLink className="header__link" activeClassName="header__link--active" to="/create">Add Expense</NavLink>&nbsp;
          |&nbsp;<NavLink className="header__link" activeClassName="header__link--active" to="/help">Help</NavLink>&nbsp;|
      </p>
    </div>
  )
}

Header.defaultProps = {
  title: 'Expensify'
}
export default Header
