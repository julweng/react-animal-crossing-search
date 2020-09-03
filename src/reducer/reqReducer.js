export const reqReducer = (state, action) => {
	switch (action.type) {
    case "GET_DATA_REQUEST": {
      return {
        ...state,
        isLoading: true
      }
    }
      
		case "GET_DATA_SUCCESS":
			return {
				...state,
				isLoading: false
			}
		case "GET_DATA_ERROR":
			return {
				...state,
				isLoading: false,
        err: action.err,
        errMessage: action.errMessage
			}
		default:
			return state
  }
}

