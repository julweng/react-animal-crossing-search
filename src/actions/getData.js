import axios from "axios"
import { searchData } from "helpers"
import { API_URL } from "constants.js"

const MOCK_DATA = {
	data: [
		{
			id: 1,
			"file-name": "ant00",
			name: {
				"name-USen": "Cyrano",
				"name-EUen": "Cyrano",
				"name-EUde": "Theo",
				"name-EUes": "Cirano",
				"name-USes": "Cirano",
				"name-EUfr": "Cyrano",
				"name-USfr": "Cyrano",
				"name-EUit": "Cirano",
				"name-EUnl": "Cyrano",
				"name-CNzh": "阳明",
				"name-TWzh": "陽明",
				"name-JPja": "さくらじま",
				"name-KRko": "사지마",
				"name-EUru": "Сирано"
			},
			personality: "Cranky",
			"birthday-string": "March 9th",
			birthday: "9/3",
			species: "Anteater",
			gender: "Male",
			subtype: "B",
			hobby: "Education",
			"catch-phrase": "ah-CHOO",
			icon_uri: "https://acnhapi.com/v1/icons/villagers/1",
			image_uri: "https://acnhapi.com/v1/images/villagers/1",
			"bubble-color": "#194c89",
			"text-color": "#fffad4",
			saying: "Don't punch your nose to spite your face.",
			"catch-translations": {
				"catch-USen": "ah-CHOO",
				"catch-EUen": "ah-CHOO",
				"catch-EUde": "schneuf",
				"catch-EUes": "achús",
				"catch-USes": "achús",
				"catch-EUfr": "ATCHOUM",
				"catch-USfr": "ATCHOUM",
				"catch-EUit": "ett-CCIÙ",
				"catch-EUnl": "ha-TSJOE",
				"catch-CNzh": "有的",
				"catch-TWzh": "有的",
				"catch-JPja": "でごわす",
				"catch-KRko": "임돠",
				"catch-EUru": "апчхи"
			}
		}
	]
}

export const getData = async (dataDispatch, reqDispatch, data) => {
	const { prevCategory, selectedCategory, term, id } = data
	reqDispatch({ type: "GET_DATA_REQUEST" })

	try {
		let res = {}

		if (selectedCategory !== null && selectedCategory !== prevCategory) {
			// res = await axios.get(`${API_URL}/${selectedCategory}`)
			res = MOCK_DATA
		} else {
			// res = await axios.get(`${API_URL}/${prevCategory}`)
			console.log(`${API_URL}/${prevCategory}/${id ? id : ""}`)
			res = MOCK_DATA
		}

		if (term) {
			// change mock-data to currentData
			res.data = searchData(MOCK_DATA.data, term)
			if (!res.data.length) {
				throw new Error("No data items match the search term")
			}
		}

		await dataDispatch({
			type: "GET_DATA_SUCCESS",
			data: res.data,
			category: selectedCategory || prevCategory,
			term,
			id
		})

		await reqDispatch({
			type: "GET_DATA_SUCCESS"
		})
	} catch (err) {
		reqDispatch({
			type: "GET_DATA_ERROR",
			err,
			errMessage: err.message
		})
	}
}
