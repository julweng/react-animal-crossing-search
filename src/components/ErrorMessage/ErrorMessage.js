import React from "react"
import { useReqValue } from "context"
import "./ErrorMessage.css"

export const ErrorMessage = () => {
	const {
		useReqState: { err, errMessage }
	} = useReqValue()

	return (
		<div className="Error__Message__Container" data-testid="error-message-container">
			{err && (
				<>
					<h3>Oops! Something went wrong</h3>
					{errMessage && <h4 data-testid="error-message">{errMessage}</h4>}
				</>
			)}
		</div>
	)
}
