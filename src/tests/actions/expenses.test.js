import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

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
