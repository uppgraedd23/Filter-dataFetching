const todos = (state = {filterName: '', filterDob:'', filterPhone:''}, action) => {
  switch (action.type) {
    case 'SET_FILTER_NAME':
        return {...state, filterName: action.data}
    case 'SET_FILTER_DOB':
        return {...state, filterDob: action.data}
    case 'SET_FILTER_PHONE':
        return {...state, filterPhone: action.data}
    default:
      return state
  }
}

export default todos
