import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, completed, text, removeTodo }) => (  
  <li style={{ textDecoration: completed ? 'line-through' : 'none' }} >
    {text}    
      <div>        
        <button onClick={removeTodo}> Remove </button>
        <button onClick={onClick}> Complete </button>
      </div>
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,  
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
