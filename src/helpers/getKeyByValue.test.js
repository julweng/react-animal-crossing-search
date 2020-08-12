import { getKeyByValue } from "."

describe("getKeyByValue", () => {
	it("Should return false when object is empty", () => {
		const key = getKeyByValue({}, "Fish")
		expect(key).toBeFalsy()
  })
  
  it("Should return false when obj is undefined", () => {
    const key = getKeyByValue(undefined, "Fish")
		expect(key).toBeFalsy()
  })

	it("Should return false when value is undefined", () => {
		const key = getKeyByValue({ fish: "Fish", sea: "Sea Creatures" }, undefined)
		expect(key).toBeFalsy()
	})

	it("Should return the key associated with the value passed in", () => {
		const key = getKeyByValue(
			{ fish: "Fish", sea: "Sea Creatures" },
			"Sea Creatures"
		)
		expect(key).toEqual("sea")
	})
})
