import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import getVisibleExpenses from '../selectors/expenses'
import summedExpenses from '../selectors/expenses-total'
import numeral from 'numeral'

const ExpenseSummary = (props) => {
  const count = props.expenses.length
  return (
    <div>
      {
        count > 0 &&
        <p>
          Viewing {count} Expense{count > 1 && 's'} Totalling {
            numeral(props.expensesTotal / 100).format('$0,0.00')
          }
        </p>
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
    expenses: getVisibleExpenses(state.expenses, state.filters),
    expensesTotal: summedExpenses(
      getVisibleExpenses(state.expenses, state.filters)
    )
  }
}

export default connect(mapStateToProps)(ExpenseSummary)
