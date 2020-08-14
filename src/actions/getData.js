import axios from "axios"
import { searchData } from "helpers"
import { API_URL } from "constants.js"

const MOCK_DATA = {
	data: [
		{
			id: 1,
			"file-name": "bitterling",
			name: {
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
			availability: {
				"month-northern": "11-3",
				"month-southern": "5-9",
				time: "",
				isAllDay: true,
				isAllYear: false,
				location: "River",
				rarity: "Common",
				"month-array-northern": [11, 12, 1, 2, 3],
				"month-array-southern": [5, 6, 7, 8, 9],
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
			shadow: "Smallest (1)",
			price: 900,
			"price-cj": 1350,
			"catch-phrase":
				"I caught a bitterling! It's mad at me, but only a little.",
			"museum-phrase":
				"Bitterlings hide their eggs inside large bivalves—like clams—where the young can stay safe until grown. The bitterling isn't being sneaky. No, their young help keep the bivalve healthy by eating invading parasites! It's a wonderful bit of evolutionary deal making, don't you think? Each one keeping the other safe... Though eating parasites does not sound like a happy childhood... Is that why the fish is so bitter?",
			image_uri: "https://acnhapi.com/v1/images/fish/1",
			icon_uri: "https://acnhapi.com/v1/icons/fish/1"
		},
		{
			id: 2,
			"file-name": "pale_chub",
			name: {
				"name-USen": "pale chub",
				"name-EUen": "pale chub",
				"name-EUde": "Döbel",
				"name-EUes": "cacho",
				"name-USes": "cacho",
				"name-EUfr": "chevaine",
				"name-USfr": "chevaine",
				"name-EUit": "zacco",
				"name-EUnl": "Japanse drakenvis",
				"name-CNzh": "溪哥",
				"name-TWzh": "溪哥",
				"name-JPja": "オイカワ",
				"name-KRko": "피라미",
				"name-EUru": "светлый закко"
			},
			availability: {
				"month-northern": "",
				"month-southern": "",
				time: "9am - 4pm",
				isAllDay: false,
				isAllYear: true,
				location: "River",
				rarity: "Common",
				"month-array-northern": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
				"month-array-southern": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
				"time-array": [9, 10, 11, 12, 13, 14, 15]
			},
			shadow: "Smallest (1)",
			price: 200,
			"price-cj": 300,
			"catch-phrase": "I caught a pale chub! That name seems a bit judgy...",
			"museum-phrase":
				"The pale chub is a river fish with simple back-and-silver coloring. Interestingly, the males' coloring becomes most vibrant when he's trying to attract a mate! Though normally plain, these fellows really know how to look stylish when they want to. Perhaps I could learn a thing or two from the pale chub...",
			image_uri: "https://acnhapi.com/v1/images/fish/2",
			icon_uri: "https://acnhapi.com/v1/icons/fish/2"
		},
		{
			id: 3,
			"file-name": "crucian_carp",
			name: {
				"name-USen": "crucian carp",
				"name-EUen": "crucian carp",
				"name-EUde": "Karausche",
				"name-EUes": "carpín",
				"name-USes": "carpín",
				"name-EUfr": "carassin",
				"name-USfr": "carassin",
				"name-EUit": "carassio",
				"name-EUnl": "kroeskarper",
				"name-CNzh": "鲫鱼",
				"name-TWzh": "鯽魚",
				"name-JPja": "フナ",
				"name-KRko": "붕어",
				"name-EUru": "карась"
			},
			availability: {
				"month-northern": "",
				"month-southern": "",
				time: "",
				isAllDay: true,
				isAllYear: true,
				location: "River",
				rarity: "Common",
				"month-array-northern": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
				"month-array-southern": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
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
			shadow: "Small (2)",
			price: 160,
			"price-cj": 240,
			"catch-phrase": "I caught a crucian carp! My skills are sharp!",
			"museum-phrase":
				'I wonder... Do you know how to tell the difference between a crucian carp and a standard-issue carp? It\'s quite easy to tell the two apart... One must simply locate the barbels. Or, rather, the lack of them! And just what is a barbel, you ask? Well, a barbel looks a little something like a mustache. A run-of-the-mill carp will sport this unsightly "facial hair," while a crucian carp is considerably better groomed! I tried to grow a mustache when I was younger. It never did fill in quite right... All for the best in the end, as mustaches go so much better with noses than with beaks!',
			image_uri: "https://acnhapi.com/v1/images/fish/3",
			icon_uri: "https://acnhapi.com/v1/icons/fish/3"
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
			console.log(`${API_URL}/${selectedCategory}`)
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
