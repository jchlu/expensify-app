// import validator from 'validator'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ExpenseDashboardPage from './components/ExpenseDashboardPage'
import AddExpense from './components/AddExpense'
import HelpPage from './components/HelpPage'
import EditExpense from './components/EditExpense'
import 'normalize.css/normalize.css'
import './styles/style.scss'

const NotFoundPage = () => (
  <h3>404!</h3>
)

const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={ExpenseDashboardPage} exact={true} />
      <Route path="/create" component={AddExpense} />
      <Route path="/help" component={HelpPage} />
      <Route path="/edit" component={EditExpense} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById('app'))
