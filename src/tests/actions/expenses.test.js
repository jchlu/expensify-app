import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { startAddExpense, addExpense, editExpense, removeExpense } from '../../actions/expenses'
import expenses from '../fixtures/expenses'

const createMockStore = configureStore([thunk])

test('Should setup removeExpense action object', () => {
  const action = removeExpense({ id: '123abc' })
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  })
})

test('Should setup editExpense action object', () => {
  const action = editExpense(
    '123abc',
    { note: 'Updated Note Value' }
  )

  const expected = {
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      note: 'Updated Note Value'
    }
  }
  expect(action).toEqual(expected)
})

test('Should setup addExpense action object with passed values', () => {
  const expenseData = {
    description: 'Rent',
    amount: 109500,
    note: 'Rent Payment',
    createdAt: 52345345
  }
  const expected = {
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  }
  const action = addExpense(expenseData)
  expect(action).toEqual(expected)
})

test('Should setup addExpense action object with default values', () => {
  const expected = {
    type: 'ADD_EXPENSE',
    expense:
      {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0,
        id: expect.any(String)
      }
  }
  const action = addExpense()
  expect(action).toEqual(expected)
})

// Wait for asyncronous promises to complete by passing and calling done function
test('Should add expense to database and mock store', (done) => {
  const store = createMockStore({})
  const expenseData = {
    description: 'Mouse',
    amount: 3000,
    note: 'Upgrade',
    createdAt: 1000
  }
  store.dispatch(startAddExpense(expenseData))
  done()
})
test('Should add expense with defaults to database and mock store', () => {
  const store = createMockStore({})
})
