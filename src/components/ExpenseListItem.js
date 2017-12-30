import React from 'react'
import { connect } from 'react-redux'
import { removeExpense } from '../actions/expenses'
import { Link } from 'react-router-dom'

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
  <div>
    <p>{description}</p>
    <p>{amount} - {createdAt}</p>
    <Link to={`/edit/${id}`} >
      <button>Edit</button>
    </Link>
    <button onClick={() => {
      // removeExpense takes an object with id set
      dispatch(removeExpense({id}))
    }}>Remove</button>
  </div>
)

export default connect()(ExpenseListItem)
