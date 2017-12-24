// import validator from 'validator'
import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route} from 'react-router-dom'
import ExpenseDashboardPage from './components/ExpenseDashboardPage'
import AddExpense from './components/AddExpense'
import HelpPage from './components/HelpPage'
import EditExpense from './components/EditExpense'
import 'normalize.css/normalize.css'
import './styles/style.scss'

const routes = (
  <BrowserRouter>
    <div>
      <Route path="/" component={ExpenseDashboardPage} exact={true}/>
      <Route path="/create" component={AddExpense} exact={true}/>
      <Route path="/help" component={HelpPage} exact={true}/>
      <Route path="/edit" component={EditExpense}/>
    </div>
  </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById('app'))
