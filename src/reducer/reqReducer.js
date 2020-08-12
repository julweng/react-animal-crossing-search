export const reqReducer = (state, action) => {
	switch (action.type) {
		case "GET_FISH_SUCCESS":
			return {
				...state,
				loaded: true
			}
		case "GET_FISH_ERROR":
			return {
				...state,
				loaded: true,
				err: action.err
			}
		default:
			return state
	}
}
