import React from "react"
import Spinner from "react-bootstrap/Spinner"
import { useReqValue } from "context"

import "./Loader.css"

export const Loader = () => {
	const {
		useReqState: { isLoading }
	} = useReqValue()

	return (
		isLoading && (
			<div className="Loader__Container" data-testid="loader-container">
				{[...Array(4).keys()].map(k => (
					<Spinner
						variant="success"
						animation="grow"
						role="loading-status"
						size="md"
						key={k}
					/>
				))}
			</div>
		)
	)
}
