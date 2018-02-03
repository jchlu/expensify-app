import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import summedExpenses from '../selectors/expenses-total.js'

const ExpenseSummary = (props) => {
  const count = props.expenses.length
  return (
    <div>
      {count > 0
        ? <p>Some Expenses</p>
        : <p>No Expenses</p>
      }
    </div>
  )
}

ExpenseSummary.propTypes = {
  expenses: PropTypes.array
}

/** What we want from the store to be passed as props */
const mapStateToProps = (state) => {
  return {
    expenses: summedExpenses(state.expenses)
  }
}

export default connect(mapStateToProps)(ExpenseSummary)
