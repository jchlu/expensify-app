import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { login, logout } from '../../actions/auth'

const createMockStore = configureMockStore([thunk])

test('Should login', () => {
  const action = login('123abc')
  expect(action).toEqual({
    type: 'LOGIN',
    uid: '123abc'
  })
})

test('Should logout', () => {
  const action = logout()
  expect(action).toEqual({
    type: 'LOGOUT'
  })
})
