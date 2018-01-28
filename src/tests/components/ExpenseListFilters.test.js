import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseListFilters } from '../../components/ExpenseListFilters'
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
