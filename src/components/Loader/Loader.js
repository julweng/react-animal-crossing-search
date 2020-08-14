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
			<div className="Loader__Container">
				{[...Array(4).keys()].map(k => (
					<Spinner
						animation="border"
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
