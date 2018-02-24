import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import getVisibleExpenses from '../selectors/expenses'
import summedExpenses from '../selectors/expenses-total'
import numeral from 'numeral'

// Destructure the props as we only need a count and total
export const ExpenseSummary = ({count, total}) => {
  const expenseWord = `Expense${count > 1 ? 's' : ''}`
  const formattedTotal = numeral(total / 100).format('$0,0.00')
  return (
    <div className='page-header'>
      <div className='content-container'>
        { count > 0 &&
        <h1 className='page-header__title'>
          Viewing <span>{count}</span> {expenseWord} Totalling <span>{formattedTotal}</span>
        </h1>
        }
        <div className='page-header__actions'>
          <Link className='button' to='/create'>Add Expense</Link>
        </div>
      </div>
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
