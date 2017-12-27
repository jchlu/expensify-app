import { createStore, combineReducers } from 'redux'

const demoState = {
  expenses: [{
    id: '0DC38EA6-EDBB-4103-AB65-FB42CD654F24',
    description: 'January Rent',
    note: '',
    amount: 54500, // in pennies
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // Date or Amount
    startDate: undefined,
    endDate: undefined
  }
}
