import React from 'react'

export default ({ description, amount, createdAt }) => (
  <div>
    <p>{description}</p>
    <p>{amount} - {createdAt}</p>
  </div>
)
