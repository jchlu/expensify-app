import React from 'react'
// Internal Components

export default class BoilerplateApp extends React.Component {
  state = {
    options: []
  }

  handleState = () => {
    this.setState(() => ({ options: [] }))
  }

  render() {
    const title = 'Boilerplate App'
    return (
      <div>
        <Header
          title={title}
        />
        <div className="container">
          <p>{title}</p>
        </div>
      </div>
    )
  }
} // End of Boilerplate class definition
