import React from 'react'
import { connect } from 'react-redux'
import { removeExpense } from '../actions/expenses'

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
  <div>
    <p>{description}</p>
    <p>{amount} - {createdAt}</p>
    <button onClick={() => {
      // removeExpense takes an object with id set
      dispatch(removeExpense({id}))
    }}>Remove Expense</button>
  </div>
)

export default connect()(ExpenseListItem)
