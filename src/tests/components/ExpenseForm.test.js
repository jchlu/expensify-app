import React from 'react'
import { shallow } from 'enzyme'
import ExpenseForm from '../../components/ExpenseForm'
import expenses from '../fixtures/expenses'

test('Should render ExpenseForm correctly', () => {
  const wrapper = shallow(<ExpenseForm />)
  expect(wrapper).toMatchSnapshot()
})

test('Should render ExpenseForm with Expense data', () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[1]} />)
  expect(wrapper).toMatchSnapshot()
})

test('Should render error for invalid form submission', () => {
  const wrapper = shallow(<ExpenseForm />)
  expect(wrapper).toMatchSnapshot()
  // Simulate a form submittion - simulate docs at API reference of Enzyme
  wrapper.find('form').simulate('submit', {
    // fake the method to prevent errors
    preventDefault: () => { }
  })
  // Check state of the error element - state docs at API reference of Enzyme
  expect(wrapper.state('error').length).toBeGreaterThan(0)
  expect(wrapper).toMatchSnapshot()
})

test('Should set description on input change', () => {
  const value = 'New Description'
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find('input').at(0).simulate('change', {
    target: { value }
  })
  expect(wrapper.state('description')).toBe(value)
})

test('Should set note on input change', () => {
  const value = 'New Note'
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find('textarea').simulate('change', {
    target: { value }
  })
  expect(wrapper.state('note')).toBe(value)
})

test('Should set amount if valid input', () => {
  const value = '12.50'
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find('input').at(1).simulate('change', {
    target: { value }
  })
  expect(wrapper.state('amount')).toBe(value)
})

test('Should not set amount if invalid input', () => {
  const value = '12.505'
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find('input').at(1).simulate('change', {
    target: { value }
  })
  expect(wrapper.state('amount')).toBe('')
})

test('Should not set amount if invalid input and existing data', () => {
  const value = '12.505'
  const expected = (expenses[0]['amount'] / 100).toString()
  const wrapper = shallow(<ExpenseForm expense={expenses[0]}/>)
  wrapper.find('input').at(1).simulate('change', {
    target: { value }
  })
  expect(wrapper.state('amount')).toBe(expected)
})
