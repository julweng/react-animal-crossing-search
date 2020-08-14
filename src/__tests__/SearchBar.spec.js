import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { getData } from "actions"
import { useDataValue, useReqValue } from "context"
import { getKeyByValue } from "helpers"
import { SearchBar } from "components"

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
	useReqValue: jest.fn(() => ({
		useReqDispatch: jest.fn()
	}))
}))

jest.mock("actions", () => ({
	getData: jest.fn()
}))

jest.mock("helpers", () => ({
	getKeyByValue: jest.fn()
}))

describe("SearchBar", () => {
	it("Should render SearchBar", () => {
		render(<SearchBar />)
		expect(screen.getByTestId("search-form")).toBeTruthy()
  })
  
  it("Should call use data context and req context values", () => {
    render(<SearchBar />)
    expect(useDataValue).toHaveBeenCalled()
    expect(useReqValue).toHaveBeenCalled()
  })

	it("Should change search text as user type", () => {
		render(<SearchBar />)

		const input = screen.getByTestId("search-input")
		expect(input).toBeTruthy()

		// before typing
		expect(input.value).toEqual("")
		userEvent.type(input, "bitterling")
		// after typing
		expect(input.value).toEqual("bitterling")
	})

	it("Should change select option as user change option", () => {
		render(<SearchBar />)

		const select = screen.getByTestId("category-select")
		expect(select).toBeTruthy()

		const fish = screen.getByTestId("Fish")
		const sea = screen.getByTestId("Sea Creatures")
		const bugs = screen.getByTestId("Bugs")
		const fossils = screen.getByTestId("Fossils")
		const villagers = screen.getByTestId("Villagers")
		const art = screen.getByTestId("Art")
		const houseware = screen.getByTestId("Houseware")

		// before selection, default is fish
		expect(fish.selected).toBeTruthy()
		expect(sea.selected).toBeFalsy()
		expect(bugs.selected).toBeFalsy()
		expect(fossils.selected).toBeFalsy()
		expect(villagers.selected).toBeFalsy()
		expect(art.selected).toBeFalsy()
		expect(houseware.selected).toBeFalsy()

		userEvent.selectOptions(select, ["Fossils"])

		// after selection
		expect(fish.selected).toBeFalsy()
		expect(sea.selected).toBeFalsy()
		expect(bugs.selected).toBeFalsy()
		expect(fossils.selected).toBeTruthy()
		expect(villagers.selected).toBeFalsy()
		expect(art.selected).toBeFalsy()
		expect(houseware.selected).toBeFalsy()

		userEvent.selectOptions(select, ["Villagers"])

		// after second selection
		expect(fish.selected).toBeFalsy()
		expect(sea.selected).toBeFalsy()
		expect(bugs.selected).toBeFalsy()
		expect(fossils.selected).toBeFalsy()
		expect(villagers.selected).toBeTruthy()
		expect(art.selected).toBeFalsy()
		expect(houseware.selected).toBeFalsy()
	})

  it("Should call getKeyByValue on submit", () => {
		render(<SearchBar />)

		const submitBtn = screen.getByText("Submit")
		expect(submitBtn).toBeTruthy()

		userEvent.click(submitBtn)
		expect(getKeyByValue).toHaveBeenCalled()
  })
  
	it("Should call getData on submit", () => {
		render(<SearchBar />)

		const submitBtn = screen.getByText("Submit")
		expect(submitBtn).toBeTruthy()

		userEvent.click(submitBtn)
		expect(getData).toHaveBeenCalled()
  })
})
