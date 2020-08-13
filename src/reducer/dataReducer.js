export const dataReducer = (state, action) => {
  console.log(action.data)
  switch (action.type) {
		case "GET_DATA_SUCCESS":
			return {
				...state,
        id: action.id,
        category: action.category,
        term: action.term,
				data: [...state.data, ...action.data]
			}

		default:
			return state
	}
}
