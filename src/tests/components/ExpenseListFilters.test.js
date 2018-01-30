import React from 'react'
import { shallow } from 'enzyme'
import moment from 'moment'
import { ExpenseListFilters } from '../../components/ExpenseListFilters'
import { DateRangePicker } from 'react-dates'
import { filters, populatedFilters } from '../fixtures/filters'

// Set up spies
let setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate, wrapper

beforeEach(() => {
  setTextFilter = jest.fn()
  sortByAmount = jest.fn()
  sortByDate = jest.fn()
  setStartDate = jest.fn()
  setEndDate = jest.fn()
  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      sortByAmount={sortByAmount}
      sortByDate={sortByDate}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  )
})
test('Should render Expense List Filters correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

// setProps using Enzyme
test('Should render Expense List Filters correctly', () => {
  wrapper.setProps({
    filters: populatedFilters
  })
  expect(wrapper).toMatchSnapshot()
})

// 1st 4 assert spies
test('Should handle text change', () => {
  const value = 'New Text For Filter'
  // find the input and simulate a change event
  // See: http://airbnb.io/enzyme/docs/api/ShallowWrapper/simulate.html
  wrapper.find('input').simulate('change', {
    target: { value }
  })
  expect(setTextFilter).toHaveBeenLastCalledWith(value)
})

/**
 * When the select is changed the onSortChange handler is triggered
 * with the new value. Use populatedFilters to first set to 'amount'
 */
test('Should sort by date', () => {
  wrapper.setProps({
    filters: populatedFilters
  })
  const value = 'date'
  wrapper.find('select').simulate('change', {
    target: { value }
  })
  expect(sortByDate).toHaveBeenCalled()
})

test('Should sort by amount', () => {
  const value = 'amount'
  wrapper.find('select').simulate('change', {
    target: { value }
  })
  expect(sortByAmount).toHaveBeenCalled()
})

test('Should handle date changes', () => {
  const startDate = moment(0).add(4, 'years')
  const endDate = moment(0).add(8, 'years')
  wrapper.find(DateRangePicker).prop('onDatesChange')({
    startDate,
    endDate
  })
  expect(setStartDate).toHaveBeenLastCalledWith(startDate)
  expect(setEndDate).toHaveBeenLastCalledWith(endDate)
})

// Assert state change by simulating change
// event simulate provide (e) as in text changes
test('Should handle date focus changes', () => {
  const calendarFocused = true
  wrapper.find(DateRangePicker).prop('onFocusChange')({ calendarFocused })
})
