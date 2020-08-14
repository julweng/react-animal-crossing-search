import React from "react"
import { render, screen } from "@testing-library/react"
import { CardsContainer } from "components"

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

describe("CardsContainer", () => {
  it("Should render")
})