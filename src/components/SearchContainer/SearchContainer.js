import React from "react"
import Container from "react-bootstrap/Container"
import Jumbotron from "react-bootstrap/Jumbotron"
import { Loader, SearchBar } from "components"
import "./SearchContainer.css"

export const SearchContainer = () => {
  return (
    <Jumbotron data-testid="search-container">
      <Loader />
			<Container className="Title__Container">
				<h1>Animal Crossing Search Bot<span role="img" aria-label="leaf emoji">🌱</span></h1>
			</Container>
      <Container className="Form__Container">
        <SearchBar />
      </Container>
    </Jumbotron>
  )
}