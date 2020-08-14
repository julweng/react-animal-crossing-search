import React from "react"
import Container from "react-bootstrap/Container"
import { DataProvider, ReqProvider } from "context"
import { CardsContainer, SearchContainer } from "components"
import "./App.css"

function App() {
	return (
		<Container>
			<ReqProvider>
				<DataProvider>
					<SearchContainer />

					<CardsContainer />
				</DataProvider>
			</ReqProvider>
		</Container>
	)
}

export default App
