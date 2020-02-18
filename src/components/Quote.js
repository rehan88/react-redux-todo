import React from 'react'
import PropTypes from 'prop-types'

const Quote = ({ quote }) => (
    <div>
        <p>
            { quote }            
        </p>
    </div>    
)

Quote.propTypes = {
  quote: PropTypes.string.isRequired  
}

export default Quote
