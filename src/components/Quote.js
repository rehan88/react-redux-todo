import React from 'react'
import PropTypes from 'prop-types'

const Quote = ({ quote, author }) => (    
    <div>
        <p>            
            { quote }            
        </p>
        <span>{ author }</span>
    </div>    
)

Quote.propTypes = {
  quote: PropTypes.string.isRequired, 
  author: PropTypes.string.isRequired, 
}

export default Quote
