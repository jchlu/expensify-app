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

test('Should truncate and set expenses', () => {
  const newExpenses = [{
    id: '100',
    description: 'Sausages',
    amount: 450,
    note: 'For tea',
    createdAt: 0
  }, {
    id: '101',
    description: 'Beans',
    amount: 100,
    note: 'For breakfast',
    createdAt: 1000
  }, {
    id: '102',
    description: 'Scrambled Egg',
    amount: 300,
    note: 'With the Beans',
    createdAt: 20000
  }]
  const action = {
    type: 'SET_EXPENSES',
    expenses: newExpenses
  }
  /* let state = expensesReducer(expenses, {})
  expect(state).toEqual(expenses) */
  // Pass all the expenses from fixtures, along with the action to set them as the new ones
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(newExpenses)
})
