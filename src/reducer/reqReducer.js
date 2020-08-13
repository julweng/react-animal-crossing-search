export const reqReducer = (state, action) => {
	switch (action.type) {
		case "GET_DATA_SUCCESS":
			return {
				...state,
				loaded: true
			}
		case "GET_DATA_ERROR":
			return {
				...state,
				loaded: true,
        err: action.err,
        errMessage: action.errMessage
			}
		default:
			return state
	}
}
