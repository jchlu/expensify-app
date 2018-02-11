export default (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        type: 'LOGIN',
        uid: action.uid
      }
    case 'LOGOUT':
      return {
        type: 'LOGOUT'
      }
    default:
      return action
  }
}
