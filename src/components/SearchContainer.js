import React from "react"
import Container from "react-bootstrap/Container"
import Jumbotron from "react-bootstrap/Jumbotron"
import { SearchBar } from "."
import "./SearchContainer.css"

export const SearchContainer = () => {
  return (
    <Jumbotron>
			<Container className="Title__Container">
				<h1>Search Animal Crossing 🌱</h1>
			</Container>
      <Container className="Form__Container">
        <SearchBar />
      </Container>
    </Jumbotron>
  )
}