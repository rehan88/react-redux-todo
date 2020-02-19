import fetch from 'cross-fetch'

export const REQUEST_QUOTE = 'REQUEST_QUOTE'
export const RECEIVE_QUOTE = 'RECEIVE_QUOTE'

function requestQuote() {  
  return {
    type: REQUEST_QUOTE
  }
}

function receiveQuote(json) {  
  return {    
    type: RECEIVE_QUOTE,
    quote: json.en,
    author: json.author,
    receivedAt: Date.now()
  }
}

export function fetchQuote() { 
  window.console.log("IN FETCH 1");  
    return function(dispatch) {      
      dispatch(requestQuote())
      window.console.log("IN FETCH");
      return fetch('http://programming-quotes-api.herokuapp.com/quotes/random')
        .then(
          response => response.json(),          
          // Do not use catch, because that will also catch
          // any errors in the dispatch and resulting render,
          // causing a loop of 'Unexpected batch number' errors.
          // https://github.com/facebook/react/issues/6895
          error => console.log('An error occurred.', error)
        )
        .then(json =>
          // We can dispatch many times!
          // Here, we update the app state with the results of the API call.
          dispatch(receiveQuote(json))
        )
    }
  }