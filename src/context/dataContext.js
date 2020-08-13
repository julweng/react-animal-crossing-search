import React, { createContext, useContext, useReducer } from "react"
import { node } from "prop-types"
import { dataReducer } from "reducer"

const DataContext = createContext()

export const DataProvider = ({ children }) => {
	const [state, dispatch] = useReducer(dataReducer, {
		id: null,
    data: [],
    category: "fish",
    term: ""
	})

	return (
		<DataContext.Provider
			value={{
				useDataState: state,
				useDataDispatch: dispatch
			}}
		>
			{children}
		</DataContext.Provider>
	)
}

export const useDataValue = () => useContext(DataContext)

DataProvider.propTypes = {
	children: node.isRequired
}
