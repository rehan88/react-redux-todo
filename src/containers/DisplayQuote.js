import { connect } from 'react-redux'
import { getQuoteOfTheDay } from '../actions'
import Quote from '../components/Quote'

const mapStateToProps = (state, ownProps) => ({

})

const mapDispatchToProps = (dispatch) => ({
   quote: () => dispatch(getQuoteOfTheDay())
}) 

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Quote)
