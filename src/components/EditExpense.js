import React from 'react'

const EditExpense = (props) => (
  <div>
    <p>Edit Expense id: {props.match.params.id}</p>
  </div>
)

export default EditExpense
