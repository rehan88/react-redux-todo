import React from 'react'
import PropTypes from 'prop-types'
import RemoveToDo from './RemoveToDo'

const Todo = ({ onClick, completed, text, removeTodo }) => (  
  <li
    onClick={onClick}
    style={{ textDecoration: completed ? 'line-through' : 'none' }}
  >
    {text}    
      <div>
        <RemoveToDo onClick={removeTodo} /> 
      </div>
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,  
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
