import React from "react"
import { render, screen } from "@testing-library/react"
import { Loader } from "components"

let mockIsLoading = false

jest.mock("react-bootstrap/Spinner", () => jest.fn(() => <div>Spinner</div>))

jest.mock("context", () => ({
	useReqValue: jest.fn(() => ({
    useReqState: {
      isLoading: mockIsLoading
    }
	}))
}))

describe("Loader", () => {
  it("Should not render loader when data is not loading", () => {
    render(<Loader />)
    expect(screen.queryByTestId("loader-container")).toBeFalsy()
  })


  it("Should render 4 Spinner as a loader while data is loading", () => {
    mockIsLoading = true
    render(<Loader />)
    expect(screen.getByTestId("loader-container")).toBeTruthy()
    expect(screen.getAllByText("Spinner").length).toEqual(4)
  })
})