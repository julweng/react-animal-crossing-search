import React from "react"
import { FishProvider, ReqProvider } from "context"
import { SearchBar } from "components"
import "./App.css"

function App() {
	return (
    <ReqProvider>
      <FishProvider>
        <SearchBar /> 
      </FishProvider>
    </ReqProvider>
  )
}

export default App
