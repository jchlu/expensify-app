import getTotalExpenses from '../../selectors/expenses-total'
import fixtures from '../fixtures/expenses'

test('Should return zero if no expenses', () => {
  const result = getTotalExpenses([])
  expect(result).toBe(0)
})

test('Should correctly add up an single expense', () => {
  const result = getTotalExpenses([fixtures[0]])
  expect(result).toBe(150)
})

test('Should correctly add up multiple expenses', () => {
  const result = getTotalExpenses(fixtures)
  expect(result).toBe(125200)
})
