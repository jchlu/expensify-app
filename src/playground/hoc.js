/* Higher Order Components (HOC)
* A component that renders other componenets
* Reuse Code
* Render Hijacking
* Prop Manipulation
* Abstract State
*/

import React from 'react'
import ReactDOM from 'react-dom'

// Standard component
const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
)
// Standard component
const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    // *** HOC Start ***
    <div>
      {props.isAdmin && <p>This is private info, please don't share</p>}
      <WrappedComponent {...props} />
    </div>
    // *** HOC End ***
  )
}

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    // *** HOC Start ***
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <p>Please log in</p>
      )}
    </div>
    // *** HOC End ***
  )
}

// Call HOC with Standard Component as a param
const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthentication(Info)

ReactDOM.render(<AuthInfo isAuthenticated={false} info='Hey there auth user' />, document.getElementById('app'))
// ReactDOM.render(<AdminInfo isAdmin={true} info='Hey there info' />, document.getElementById('app'))
