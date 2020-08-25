import React from "react"
import { render, screen } from "@testing-library/react"
import { Detail } from "components"

let mockData = []

jest.mock("context", () => ({
	useDataValue: jest.fn(() => ({
		useDataState: {
			data: mockData,
			category: "fish"
		}
	}))
}))

describe("Detail", () => {
	it("Should render Detail", () => {
		render(<Detail />)
		expect(screen.getByTestId("detail-container")).toBeTruthy()
	})

	it("should display unknown when data is absent", () => {
		render(<Detail />)
		expect(screen.getByTestId("item-name")).toHaveTextContent("unknown")
		expect(screen.getByTestId("item-price")).toHaveTextContent("unknown")
		expect(screen.getByTestId("item-location")).toHaveTextContent("unknown")
		expect(screen.getByTestId("item-period")).toHaveTextContent("unknown")
		expect(screen.getByTestId("item-rarity")).toHaveTextContent("unknown")
		screen
			.getAllByTestId("item-months")
			.forEach(m => expect(m.className).toEqual("non-active-month"))
	})

	it("should display item detail", () => {
		mockData = [
			{
				id: 1,
				"file-name": "bitterling",
				name: { "name-USen": "bitterling" },
				availability: {
					"month-northern": "1",
					"month-southern": "2",
					time: "",
					isAllDay: true,
					isAllYear: false,
					location: "River",
					rarity: "Common",
					"month-array-northern": [11, 12, 1, 2, 3],
					"month-array-southern": [5, 6, 7, 8, 9]
				},
				price: 900,
				image_uri: "https://acnhapi.com/v1/images/fish/1"
			}
		]
		render(<Detail />)

		expect(screen.getByTestId("item-name")).toHaveTextContent("bitterling")
		expect(screen.getByTestId("item-price")).toHaveTextContent("900")
		expect(screen.getByTestId("item-location")).toHaveTextContent("River")
		expect(screen.getByTestId("item-period")).toHaveTextContent("AM & PM")
		expect(screen.getByTestId("item-rarity")).toHaveTextContent("Common")
	})
})
