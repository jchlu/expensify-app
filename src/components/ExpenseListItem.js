import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeral'

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <p>{description}</p>
    <p>
      {numeral(amount / 100).format('$0,0.00')}
      &nbsp;-&nbsp;
      {moment(createdAt).format('MMMM Do, YYYY')}
    </p>
    <Link to={`/edit/${id}`} >
      <button>Edit</button>
    </Link>
  </div>
)

export default ExpenseListItem
