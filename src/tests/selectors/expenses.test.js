import selectExpenses from '../../selectors/expenses'

const expenses = [{
  id: 1,
  description: 'Gum',
  amount: 150,
  note: '',
  createdAt: 0
}, {
  id: 2,
  description: 'Credit Card',
  amount: 15550,
  note: '',
  createdAt: -1000
}, {
  id: 3,
  description: 'Rent',
  amount: 109500,
  note: '',
  createdAt: 1000
}]

test('Should filter out expenses without matching text', () => {
  const filters = {
    text: 'e',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  }
  const result = selectExpenses(expenses, filters)
  expect(result).toEqual([expenses[2], expenses[1]])
})
