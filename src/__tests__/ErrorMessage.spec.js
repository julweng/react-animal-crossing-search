import React from "react"
import { render, screen } from "@testing-library/react"
import { ErrorMessage } from "components"

let mockErr = false
let mockErrMsg = ""

jest.mock("context", () => ({
	useReqValue: jest.fn(() => ({
    useReqDispatch: jest.fn(),
    useReqState: {
      err: mockErr,
      errMessage: mockErrMsg
    }
	}))
}))

describe("ErrorMessage", () => {
  it("Should render error message container", () => {
    render(<ErrorMessage />)
    expect(screen.getByTestId("error-message-container")).toBeTruthy()
  })


  it("Should not render general error message if there is no error", () => {
    render(<ErrorMessage />)
    expect(screen.queryByText("Oops! Something went wrong")).toBeFalsy()
  })

  it("Should render general error message if there is error", () => {
    mockErr = true
    render(<ErrorMessage />)
    expect(screen.getByText("Oops! Something went wrong")).toBeTruthy()
  })

  it("Should not render error message if there is no error message", () => {
    render(<ErrorMessage />)
    expect(screen.queryByTestId("error-message")).toBeFalsy()
  })

  it("Should render error message if there is an error message", () => {
    mockErrMsg = "this is a mocked error"
    render(<ErrorMessage />)
    expect(screen.getByText("this is a mocked error")).toBeTruthy()
  })
})