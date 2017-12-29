import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'

const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    <p>{props.filters.text}</p>
    {props.expenses.map((expense) => {
      return (
        <ExpenseListItem key={expense.id} {...expense}/>
      )
    })}
  </div>
)

/** What we want from the store to be passed as props */
const mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
    filters: state.filters
  }
}

export default connect(mapStateToProps)(ExpenseList)

/*
// *** Original iteration: ***
const ConnectedExpenseList = connect((state) => {
  return {
    expenses: state.expenses
  }
})(ExpenseList)

export default ConnectedExpenseList

// *** Original becomes: ***
export default connect((state) => {
  return {
    expenses: state.expenses
  }
})(ExpenseList)

// *** Which then becomes: ***
const mapStateToProps = (state) => {
  return {
    expenses: state.expenses
  }
}
export default connect(mapStateToProps)(ExpenseList)
 */
