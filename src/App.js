import React from "react"
import Container from "react-bootstrap/Container"
import { DataProvider, ReqProvider } from "context"
import { SearchContainer } from "components"
import "./App.css"

function App() {
	return (
		<Container>
			<ReqProvider>
				<DataProvider>
					<SearchContainer />
				</DataProvider>
			</ReqProvider>
		</Container>
	)
}

export default App
