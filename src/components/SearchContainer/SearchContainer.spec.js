import React from "react"
import { render, screen } from "@testing-library/react"
import { SearchContainer } from "./SearchContainer"

jest.mock("context", () => ({
  useDataValue: jest.fn(() => ({
    useDataDispatch: jest.fn(),
    useDataState: {
      id: null,
      category: "fish",
      term: "",
			data: []
    }
  })),
  useReqValue: jest.fn(() =>({
    useReqDispatch: jest.fn()
  }))
}))

describe("SearchContainer", () => {
  it("Should render SearchContainer", () => {
    render(<SearchContainer />)
    expect(screen.getByTestId("search-container")).toBeTruthy()
  })

  it("Should render SearchBar", () => {
    render(<SearchContainer />)
    expect(screen.getByTestId("search-form")).toBeTruthy()
  })
})