import axios from "axios"
import { searchData } from "helpers"
import { API_URL } from "constants.js"

const MOCK_DATA = {
	data: [
		/*{
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
    }*/
   {
      "id": 1,
      "file-name": "bitterling",
      "name": {
        "name-USen": "bitterling",
        "name-EUen": "bitterling",
        "name-EUde": "Bitterling",
        "name-EUes": "amarguillo",
        "name-USes": "amarguillo",
        "name-EUfr": "bouvière",
        "name-USfr": "bouvière",
        "name-EUit": "rodeo",
        "name-EUnl": "bittervoorn",
        "name-CNzh": "红目鲫",
        "name-TWzh": "紅目鯽",
        "name-JPja": "タナゴ",
        "name-KRko": "납줄개",
        "name-EUru": "горчак"
      },
      "availability": {
        "month-northern": "11-3",
        "month-southern": "5-9",
        "time": "",
        "isAllDay": true,
        "isAllYear": false,
        "location": "River",
        "rarity": "Common",
        "month-array-northern": [
          11,
          12,
          1,
          2,
          3
        ],
        "month-array-southern": [
          5,
          6,
          7,
          8,
          9
        ],
        "time-array": [
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23
        ]
      },
      "shadow": "Smallest (1)",
      "price": 900,
      "price-cj": 1350,
      "catch-phrase": "I caught a bitterling! It's mad at me, but only a little.",
      "museum-phrase": "Bitterlings hide their eggs inside large bivalves—like clams—where the young can stay safe until grown. The bitterling isn't being sneaky. No, their young help keep the bivalve healthy by eating invading parasites! It's a wonderful bit of evolutionary deal making, don't you think? Each one keeping the other safe... Though eating parasites does not sound like a happy childhood... Is that why the fish is so bitter?",
      "image_uri": "https://acnhapi.com/v1/images/fish/1",
      "icon_uri": "https://acnhapi.com/v1/icons/fish/1"
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
