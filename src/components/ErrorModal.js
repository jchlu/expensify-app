import React from 'react'
// Third Party Components
import Modal from 'react-modal'

/** ShowErrorModal requires three params,
 * a message, a show boolean and a function to call on close */
const ErrorModal = (props) => (
  <Modal
    isOpen={!!props.showError}
    onRequestClose={props.handleClearShowError}
    contentLabel="Error Message"
    closeTimeoutMS={300}
    className="modal"
    appElement={document.getElementById('app')}
  >
    <h3 className="modal__title">Warning</h3>
    {props.errorMessage && <p className="modal__body">{props.errorMessage}</p>}
    <button className="button" onClick={props.handleClearShowError}>Okay</button>
  </Modal>
)

export default ErrorModal
