import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import sortedAndFilteredExpenses from '../selectors/expenses'
import PropTypes from 'prop-types'
export const ExpenseList = (props) => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">Expenses</div>
      <div className="show-for-desktop">Expense</div>
      <div className="show-for-desktop">Amount</div>
    </div>
    {props.expenses.length === 0
      ? <p>No expenses to display</p>
      : props.expenses.map((expense) => {
        return (
          <ExpenseListItem key={expense.id} {...expense} />
        )
      })
    }
  </div>
)

ExpenseList.propTypes = {
  expenses: PropTypes.array
}

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
