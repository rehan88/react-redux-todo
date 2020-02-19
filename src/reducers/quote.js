const quote = (state = {}, action) => {  
  window.console.log(action);  
  return {
    quote : action.quote,
    author : action.author
  }    
}

export default quote
