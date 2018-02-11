import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Switch } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import AddExpense from '../components/AddExpense'
import EditExpense from '../components/EditExpense'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
import Header from '../components/Header'
import HelpPage from '../components/HelpPage'
import LoginPage from '../components/LoginPage' // default connected export
import NotFoundPage from '../components/NotFoundPage'

export const history = createHistory()

const AppRouter = () => {
  const title = 'Expensify App'
  return (
    <Router history={history}>
      <div>
        <Header title={title}/>
        <Switch>
          <Route path="/" component={LoginPage} exact={true} />
          <Route path="/dashboard" component={ExpenseDashboardPage}/>
          <Route path="/create" component={AddExpense} />
          <Route path="/help" component={HelpPage} />
          <Route path="/edit/:id" component={EditExpense} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  )
}

export default AppRouter
