import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test(('Should set default state'), () => {
  const state = expensesReducer(undefined, { type: '@@INIT' })
  expect(state).toEqual([])
})

test('Should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([expenses[0], expenses[2]])
})

test('Should not remove expenses if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)
})

// 'Should add an expense'
test('Should add an expense', () => {
  const expense = {
    id: 4,
    description: 'Cinema Ticket',
    amount: 1350,
    note: 'Star Wars',
    createdAt: 0
  }
  const action = {
    type: 'ADD_EXPENSE',
    expense
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([...expenses, expense])
})

// 'Should edit an expense'
test('Should edit an expense', () => {
  const note = 'Wrigleys'
  const expense = {
    ...expenses[0],
    note
  }
  const action = {
    type: 'EDIT_EXPENSE',
    id: expense.id,
    updates: { note }
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([
  expense,
  expenses[1],
  expenses[2]
  ])
  // expect(state[0].note).toBe(note)
})

// 'Should not edit an expense if expense not found'
test('Should not edit an expense if expense not found', () => {
  const note = 'Wrigleys'
  const expense = {
    ...expenses[0],
    note
  }
  const action = {
    type: 'EDIT_EXPENSE',
    id: 999,
    updates: { note }
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)
})