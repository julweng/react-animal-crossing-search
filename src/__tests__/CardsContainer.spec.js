import React from "react"
import { render, screen } from "@testing-library/react"
import { CardsContainer } from "components"

jest.mock("context", () => ({
	useDataValue: jest.fn(() => ({
		useDataDispatch: jest.fn(),
		useDataState: {
			category: "fish",
			term: "",
			data: []
		}
	})),
	useReqValue: jest.fn(() => ({
    useReqDispatch: jest.fn(),
    useReqState: {
      err: false,
      errMessage: ""
    }
	}))
}))

describe("CardsContainer", () => {
  it("Should render CardsContainer", () => {
    render(<CardsContainer />)
    expect(screen.getByTestId("cards-container")).toBeTruthy()
  })

  it("Should render ErrorMessage", () => {
    render(<CardsContainer />)
    expect(screen.getByTestId("error-message-container")).toBeTruthy()
  })

  it("Should render Cards", () => {
    render(<CardsContainer />)
    expect(screen.getByTestId("cards")).toBeTruthy()
  })
})