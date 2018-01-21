import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { addExpense } from '../actions/expenses'

/* Avoid inline functions by switching to a class
* exporting the unconnected version to allow testing */
export class AddExpense extends React.Component {
  onSubmit = (expense) => {
    this.props.onSubmit(expense)
    this.props.history.push('/')
  }
  render() {
    return (
      <div>
      <p>Add Expense</p>
      <ExpenseForm
        onSubmit={this.onSubmit}
      />
    </div>
  )
  }
}

/* const AddExpense = (props) => (
  <div>
    <p>Add Expense</p>
    <ExpenseForm
      onSubmit={(expense) => {
        props.onSubmit(expense)
        props.history.push('/')
      }}
    />
  </div>
) */

const mapDispatchToProps = (dispatch) => ({
  // return dispatcher functions, abstracting them away from the component
  onSubmit: (expense) => dispatch(addExpense(expense))
})
export default connect(undefined, mapDispatchToProps)(AddExpense)
