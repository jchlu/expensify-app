import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { startAddExpense, addExpense, editExpense, removeExpense } from '../../actions/expenses'
import expenses from '../fixtures/expenses'
import database from '../../firebase/firebase'

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
  const expected = {
    type: 'ADD_EXPENSE',
    expense: expenses[2]
  }
  const action = addExpense(expenses[2])
  expect(action).toEqual(expected)
})

/** Wait for asyncronous promises to complete by passing and calling done function
* using https://github.com/arnaudbenard/redux-mock-store
* with its' ability to check for dispatched actions etc.
*/
test('Should add expense to database and mock store', (done) => {
  const store = createMockStore({})
  const expenseData = {
    description: 'Mouse',
    amount: 3000,
    note: 'Upgrade',
    createdAt: 1000
  }
  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    })
    // Check the actual firebase db for the persisted expenseData
    // Use promise chaining to improve readability
    return database.ref(`expenses/${actions[0].expense.id}`).once('value')
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseData)
    done()
  })
})
test('Should add expense with defaults to database and mock store', () => {
  const store = createMockStore({})
})
