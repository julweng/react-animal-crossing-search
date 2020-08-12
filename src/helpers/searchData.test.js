import { searchData } from "."

const MOCK_DATA = [
	{
		id: 1,
		"file-name": "bitterling",
		name: {
			"name-USen": "bitterling",
			"name-TWzh": "紅目鯽",
			"name-JPja": "タナゴ"
		}
	},
	{
		id: 2,
		"file-name": "pale_chub",
		name: {
			"name-USen": "pale chub",
			"name-TWzh": "溪哥",
			"name-JPja": "オイカワ"
		}
	}
]

describe("searchData", () => {
  it("Should return empty array if data argument is undefined", () => {
    const arr = searchData(undefined, "bitterling")
    expect(arr).toEqual([])
  })

  it("Should return empty array if data argument is an empty array", () => {
    const arr = searchData([], "bitterling")
    expect(arr).toEqual([])
  })

  it("Should return empty array if term argument is an undefined", () => {
    const arr = searchData([], undefined)
    expect(arr).toEqual([])
  })

  it("Should return empty array if term argument is an empty string", () => {
    const arr = searchData([], "")
    expect(arr).toEqual([])
  })

  it("Should return array of matched objects", () => {
    const arr = searchData(MOCK_DATA, "bitterling")
    expect(arr).toEqual([MOCK_DATA[0]])
  })
})
