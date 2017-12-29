import React from 'react'
import ExpenseForm from './ExpenseForm'
const AddExpense = () => {
  const title = 'Add Expense'
  return (
    <div>
      <div className="container">
        <p>{title}</p>
        <ExpenseForm />
      </div>
    </div>
  )
}

export default AddExpense
