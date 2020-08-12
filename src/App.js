import React from "react"
import Container from "react-bootstrap/Container"
import { FishProvider, ReqProvider } from "context"
import { SearchBar } from "components"
import "./App.css"

function App() {
	return (
		<Container>
			<ReqProvider>
				<FishProvider>
					<SearchBar />
				</FishProvider>
			</ReqProvider>
		</Container>
	)
}

export default App
