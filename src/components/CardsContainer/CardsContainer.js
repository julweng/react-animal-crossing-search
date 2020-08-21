import React from "react"
import Container from "react-bootstrap/Container"
import { Cards, Detail, ErrorMessage } from "components"
import "./CardsContainer.css"

export const CardsContainer = () => {
	return (
		<Container className="Cards__Container" data-testid="cards-container">
			<ErrorMessage />
			<Cards />
      <Detail />
		</Container>
	)
}
