const quotes = (state = [], action) => {
  switch (action) {
    case 'GET_QUOTE_OF_THE_DAY':
      return [
        ...state,
        {
          quote : "Test"
        }
      ]
    default:
      return state
  }
}

export default quotes
