export const fishReducer = (state, action) => {
	switch (action.type) {
		case "GET_FISH_SUCCESS":
			return {
				...state,
				id: action.id,
				fish: [...state.fish, ...action.fish]
			}

		default:
			return state
	}
}
