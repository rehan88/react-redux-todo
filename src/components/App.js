import React from 'react'
import Footer from './Footer'
import Header from './Header'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import DisplayQuote from '../containers/DisplayQuote'

const App = () => (
  <div>
    <Header/>
    <DisplayQuote/>
      <AddTodo />
        <VisibleTodoList />      
    <Footer />
  </div>
)

export default App
