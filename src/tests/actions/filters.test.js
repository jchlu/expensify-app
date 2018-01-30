import moment from 'moment'
import * as filters from '../../actions/filters'

test('Should generate setTextFilter action object from text', () => {
  const text = 'Test Filter'
  const action = filters.setTextFilter(text)
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text
  })
})

test('Should generate default setTextFilter action object', () => {
  const action = filters.setTextFilter()
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  })
})

test('Should generate sortByDate action object', () => {
  const action = filters.sortByDate()
  expect(action).toEqual({
    type: 'SORT_BY_DATE'
  })
})

test('Should generate sortByAmount action object', () => {
  const action = filters.sortByAmount()
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT'
  })
})

test('Should generate setStartDate action object', () => {
  const action = filters.setStartDate(moment(0))
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  })
})

test('Should generate setEndDate action object', () => {
  const action = filters.setEndDate(moment(0))
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  })
})
