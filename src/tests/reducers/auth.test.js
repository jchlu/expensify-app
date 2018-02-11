import authReducer from '../../reducers/auth'

test('Should set uid on login', () => {
  const uid = '123abc'
  const action = {
    type: 'LOGIN',
    uid
  }
  const state = authReducer(undefined, action)
  expect(state.uid).toBe(uid)
})

test('Should clear uid on logout', () => {
  const currentState = { uid: '123abc' }
  const action = { type: 'LOGOUT' }
  const state = authReducer(currentState, action)
  expect(state.uid).toBeUndefined()
})
