import React from "react"
import { render, screen } from "@testing-library/react"
import  userEvent from "@testing-library/user-event"
import { getData } from "actions"
import { Cards } from "components"

let mockIsLoading = false
let mockData = [
  {
    id: "1",
    icon_uri: "mock-img.com",
    name: {
      "name-USen": "mock item"
    }
  }
]

jest.mock("context", () => ({
	useDataValue: jest.fn(() => ({
		useDataDispatch: jest.fn(),
		useDataState: {
			category: "fish",
			data: mockData
		}
	})),
	useReqValue: jest.fn(() => ({
    useReqDispatch: jest.fn(),
    useReqState: {
      isLoading: mockIsLoading
    }
	}))
}))

jest.mock("actions", () => ({
  getData: jest.fn()
}))

describe("Cards", () => {
  afterEach(() => jest.clearAllMocks())
  
  it("Should render Cards", () => {
    render(<Cards />)
    expect(screen.getByTestId("cards"))
    expect(screen.getAllByTestId("individual-card").length).toEqual(1)
    expect(screen.getByAltText("mock item")).toHaveAttribute("src", "mock-img.com")
  })

  it("Should call getData when a card is clicked", () => {
    render(<Cards />)
    userEvent.click(screen.getByTestId("individual-card"))
    expect(getData).toHaveBeenCalled()
  })

  it("Should not render Cards while isLoading is true", () => {
    mockIsLoading = true
    render(<Cards />)
    expect(screen.getByTestId("cards"))
    expect(screen.queryAllByTestId("individual-card").length).toEqual(0)
  })

  it("Should not render Cards while there is no data", () => {
    mockIsLoading = false
    mockData = []
    render(<Cards />)
    expect(screen.getByTestId("cards"))
    expect(screen.queryAllByTestId("individual-card").length).toEqual(0)
  })
})