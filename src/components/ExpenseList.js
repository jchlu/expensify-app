import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import sortedAndFilteredExpenses from '../selectors/expenses'

const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
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
    expenses: sortedAndFilteredExpenses(state.expenses, state.filters)
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
