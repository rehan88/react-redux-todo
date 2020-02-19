import { connect } from 'react-redux'
import { fetchQuote } from '../actions/quote'
import Quote from '../components/Quote'

const mapStateToProps = (state, ownProps) => ({
  quote: "Loading",
  author: "Loading"
})

const getProps = (dispatch) => {    
    return dispatch(() => fetchQuote());  
};

const mapDispatchToProps = (dispatch) => ({
   quote : getProps()
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Quote)
