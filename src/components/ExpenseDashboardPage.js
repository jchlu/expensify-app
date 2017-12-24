import React from 'react'
// Internal Components

export default class ExpenseDashboardPage extends React.Component {
  state = {
    options: []
  }

  handleState = () => {
    this.setState(() => ({ options: [] }))
  }

  render() {
    const title = 'Expense Dashboard Page'
    return (
      <div>
        <div className="container">
          <p>{title}</p>
        </div>
      </div>
    )
  }
} // End of Expensify class definition
