import 'react-dates/initialize'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter, { history } from './routers/AppRouter'
import configureStore from './store/configureStore'
import { startSetExpenses } from './actions/expenses'
import { login, logout } from './actions/auth'
import getVisibleExpenses from './selectors/expenses'
import moment from 'moment'
import 'normalize.css/normalize.css'
import './styles/style.scss'
import 'react-dates/lib/css/_datepicker.css'
import { firebase } from './firebase/firebase'
// import './playground/promises.js'

const store = configureStore()
/*
store.subscribe(() => {
  const state = store.getState()
  const visibleExpenses = getVisibleExpenses(
    state.expenses,
    state.filters
  )
  console.log(visibleExpenses)
})
 */
/* store.dispatch(addExpense({ description: 'Water Bill', amount: 4500, createdAt: 1000 }))
store.dispatch(addExpense({ description: 'Gas Bill', amount: 300, createdAt: 21000 }))
store.dispatch(addExpense({ description: 'Rent', amount: 109500, createdAt: 1000 }))
 */
// store.dispatch(setTextFilter('water'))

/* setTimeout(() => {
  store.dispatch(setTextFilter('bill'))
}, 3000)
 */
const state = store.getState()
const visibleExpenses = getVisibleExpenses(
  state.expenses,
  state.filters
)

const bootstrapExpensesApp = () => {
  moment.locale('en-gb') // Format the dates for 'react-dates'
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  )
}

let hasRendered = false
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(bootstrapExpensesApp(), document.getElementById('app'))
    hasRendered = true
  }
}
ReactDOM.render(<p><img src="/images/loading.gif" alt="Loading..." /></p>, document.getElementById('app'))

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid))
    store.dispatch(startSetExpenses()).then(() => {
      renderApp()
      if (history.location.pathname === '/') {
        history.push('/dashboard')
      }
    })
  } else {
    store.dispatch(logout())
    renderApp()
    history.push('/')
  }
})
