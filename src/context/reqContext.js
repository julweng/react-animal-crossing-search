import React, { createContext, useContext, useReducer } from "react"
import { node } from "prop-types"
import { reqReducer } from "reducer"

const ReqContext = createContext()

export const ReqProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reqReducer, { 
    isLoading: false,
    err: null,
    errMessage: "" 
  })

	return (
		<ReqContext.Provider
			value={{
				useReqState: state,
				useReqDispatch: dispatch
			}}
		>
			{children}
		</ReqContext.Provider>
	)
}

export const useReqValue = () => useContext(ReqContext)

ReqProvider.propTypes = {
	children: node.isRequired
}
