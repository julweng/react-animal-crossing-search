import axios from "axios"
import { API_URL } from "constants.js"

export const getData = async (dataDispatch, reqDispatch, category, id) => {
	try {
		const res = await axios.get(`${API_URL}/${category}`)
		dataDispatch({
			type: "GET_DATA_SUCCESS",
			data: res.data,
			id
		})
		reqDispatch({
			type: "GET_DATA_SUCCESS"
		})
	} catch (err) {
		reqDispatch({
			type: "GET_DATA_ERROR",
			err
		})
	}
}
