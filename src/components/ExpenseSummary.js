import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import getVisibleExpenses from '../selectors/expenses'
import summedExpenses from '../selectors/expenses-total'
import numeral from 'numeral'

// Destructure the props as we only need a count and total
export const ExpenseSummary = ({count, total}) => {
  return (
    <div>
      { count > 0 &&
        <p>
          Viewing {count} Expense{count > 1 && 's'} Totalling {
            numeral(total / 100).format('$0,0.00')
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
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
  return {
    count: visibleExpenses.length,
    total: summedExpenses(visibleExpenses)
  }
}

export default connect(mapStateToProps)(ExpenseSummary)
