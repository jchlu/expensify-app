import React from 'react'
import { Link } from 'react-router-dom'

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <p>{description}</p>
    <p>{amount} - {createdAt}</p>
    <Link to={`/edit/${id}`} >
      <button>Edit</button>
    </Link>
  </div>
)

export default ExpenseListItem
