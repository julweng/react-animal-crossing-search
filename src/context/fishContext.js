import React, { createContext, useContext, useReducer } from "react"
import { node } from "prop-types"
import { fishReducer } from "reducer"

const FishContext = createContext()

export const FishProvider = ({ children }) => {
	const [state, dispatch] = useReducer(fishReducer, {
		id: null,
		fish: []
	})

	return (
		<FishContext.Provider
			value={{
				useFishState: state,
				useFishDispatch: dispatch
			}}
		>
			{children}
		</FishContext.Provider>
	)
}

export const useFishValue = () => useContext(FishContext)

FishProvider.propTypes = {
	children: node.isRequired
}
