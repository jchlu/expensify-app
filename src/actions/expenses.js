import uuid from 'uuid'
import database from '../firebase/firebase'
// ADD_EXPENSE
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
})

export const startAddExpense = (expenseData = {}) => {
  // Returning a function here only works because of thunk middleware
  return (dispatch) => {
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData
    const expense = { description, note, amount, createdAt }
    return database.ref('expenses').push(expense).then((ref) => {
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }))
    })
  }
}

// REMOVE_EXPENSE
export const removeExpense = ({ id }) => ({
  type: 'REMOVE_EXPENSE',
  id
})

export const startRemoveExpense = ({ id }) => {
  return (dispatch) => {
    const reference = `expenses/${id}`
    return database.ref(reference).remove().then(() => {
      dispatch(removeExpense({ id }))
    })
  }
}

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})

// SET_EXPENSES
export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
})

export const startSetExpenses = () => {
  return (dispatch) => {
  // Fetch all expenses data once from firebase
    return database.ref('expenses')
      .once('value')
      .then((snapshot) => {
      // Parse the data into an array (as per firebase.js testing)
        const expenses = []
        snapshot.forEach((childSnapshot) => {
          expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          })
        })
        // Dispatch SET_EXPENSES with firebase array
        dispatch(setExpenses(expenses))
      })
      .catch((error) => {
        console.log('Error fetching data', error)
      })
  }
}
