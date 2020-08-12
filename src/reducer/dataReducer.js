export const dataReducer = (state, action) => {
	switch (action.type) {
		case "GET_DATA_SUCCESS":
			return {
				...state,
				id: action.id,
				data: [...state.data, ...action.data]
			}

		default:
			return state
	}
}
