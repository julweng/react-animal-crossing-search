import React from "react"
import { useReqValue } from "context"

export const ErrorMessage = () => {
	const {
		useReqState: { err, errMessage }
	} = useReqValue()

	return (
		<div>
			{err && (
				<>
					<p>Oops! Something went wrong</p>
					{errMessage && <p>{errMessage}</p>}
				</>
			)}
		</div>
	)
}
