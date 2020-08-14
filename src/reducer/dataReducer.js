export const dataReducer = (state, action) => {
  switch (action.type) {
		case "GET_DATA_SUCCESS":
			return {
				...state,
        id: action.id,
        category: action.category,
        term: action.term,
				data: action.data
			}

		default:
			return state
	}
}
