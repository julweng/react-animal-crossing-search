import React from "react"
import Container from "react-bootstrap/Container"
import { ErrorMessage, Cards } from "components"
import "./CardsContainer.css"

export const CardsContainer = () => {
	return (
		<Container className="Cards__Container">
			<ErrorMessage />
			<Cards />
		</Container>
	)
}
