import React from 'react'
import PropTypes from 'prop-types'

const RemoveToDo = ({ onClick }) => (
    <button onClick={onClick} >
      Remove
    </button>
)

RemoveToDo.propTypes = {  
    onClick: PropTypes.func.isRequired
}

export default RemoveToDo
