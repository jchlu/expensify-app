import React from 'react'
// Internal Components

export default class HelpPage extends React.Component {
  state = {
    options: []
  }

  handleState = () => {
    this.setState(() => ({ options: [] }))
  }

  render() {
    const title = 'Help Page'
    return (
      <div>
        <div className="container">
          <p>{title}</p>
        </div>
      </div>
    )
  }
} // End of HelpPage class definition
