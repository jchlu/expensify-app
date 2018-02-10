import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {
  startAddExpense,
  addExpense,
  editExpense,
  startEditExpense,
  removeExpense,
  startRemoveExpense,
  setExpenses,
  startSetExpenses
} from '../../actions/expenses'
import expenses from '../fixtures/expenses'
import database from '../../firebase/firebase'

const createMockStore = configureMockStore([thunk])

beforeEach((done) => {
  const expenseData = {}
  expenses.forEach(({ id, description, amount, note, createdAt }) => {
    expenseData[id] = { description, amount, note, createdAt }
    database.ref('expenses').set(expenseData).then(() => done())
  })
})

test('Should setup removeExpense action object', () => {
  const action = removeExpense({ id: '123abc' })
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  })
})

// test Should remove expense from firebase - fetch it and expect null for the value
test('Should remove expense from firebase', (done) => {
  const store = createMockStore()
  const id = expenses[1].id
  store.dispatch(startRemoveExpense({ id })).then(() => {
    return database.ref(`expenses/${id}`).once('value')
      .then((snapshot) => {
        expect(snapshot.val()).toBeNull()
        done()
      })
    // const val = database.ref(reference).once('value')
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

test('Should edit expense in firebase', (done) => {
  const store = createMockStore()
  const id = expenses[1].id
  const description = 'This is the new description'
  store.dispatch(startEditExpense(id, { description })).then(() => {
    return database.ref(`expenses/${id}`).once('value')
      .then((snapshot) => {
        expect(snapshot.val().description).toBe(description)
        done()
      })
    // const val = database.ref(reference).once('value')
  })
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

test('Should add expense with defaults to database and mock store', (done) => {
  const store = createMockStore({})
  const defaults = {
    description: '',
    note: '',
    amount: 0,
    createdAt: 0
  }
  store.dispatch(startAddExpense({})).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...defaults
      }
    })
    // Check the actual firebase db for the persisted defaults
    // Use promise chaining to improve readability
    return database.ref(`expenses/${actions[0].expense.id}`).once('value')
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(defaults)
    done()
  })
})

test('Should setup setExpenses action object with passed values', () => {
  const action = setExpenses(expenses)
  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses
  })
})

test('Should fetch expenses from firebase', (done) => {
  const store = createMockStore()
  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'SET_EXPENSES',
      expenses
    })
  })
  done()
})
