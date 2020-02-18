const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo => (todo.id === action.id) ? {...todo, completed: !todo.completed} : todo)
    case 'REMOVE_TODO':
      var tasks = [...state];      
      var task = tasks.filter(t => t.id === action.id);      
      tasks.splice(tasks.indexOf(task[0]), 1);      
      return tasks;      
    default:
      return state
  }
}

export default todos
