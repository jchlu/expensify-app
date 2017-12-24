import React from 'react'
// Internal Components

export default class AddExpense extends React.Component {
  state = {
    options: []
  }

  handleState = () => {
    this.setState(() => ({ options: [] }))
  }

  render() {
    const title = 'Add Expense'
    return (
      <div>
        <div className="container">
          <p>{title}</p>
        </div>
      </div>
    )
  }
} // End of AddExpense class definition
