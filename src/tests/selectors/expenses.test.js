import selectExpenses from '../../selectors/expenses'
import moment from 'moment'

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
  createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
  id: 3,
  description: 'Rent',
  amount: 109500,
  note: '',
  createdAt: moment(0).add(4, 'days').valueOf()
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

test('Should filter by startDate', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: moment(0),
    endDate: undefined
  }
  const result = selectExpenses(expenses, filters)
  expect(result).toEqual([expenses[2], expenses[0]])
})

test('Should filter by end date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: moment(0)
  }
  const result = selectExpenses(expenses, filters)
  expect(result).toEqual([expenses[0], expenses[1]])
})

test('Should sort by date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  }
  const result = selectExpenses(expenses, filters)
  expect(result).toEqual([expenses[2],expenses[0],expenses[1]])
})

test ('Should sort by amount', () => {
  const filters = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
  const result = selectExpenses(expenses, filters)
  expect(result).toEqual([expenses[2],expenses[1],expenses[0]])
})