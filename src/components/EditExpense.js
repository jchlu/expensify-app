import React from 'react'
// Internal Components

export default class EditExpense extends React.Component {
  state = {
    options: []
  }

  handleState = () => {
    this.setState(() => ({ options: [] }))
  }

  render() {
    const title = 'Edit Expense'
    return (
      <div>
        <div className="container">
          <p>{title}</p>
        </div>
      </div>
    )
  }
} // End of EditExpense class definition
