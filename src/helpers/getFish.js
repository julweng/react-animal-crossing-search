import axios from "axios"
import { API_URL } from "constants.js"

export const getFish = async (fishDispatch, reqDispatch, id) => {
	try {
		const res = await axios.get(`${API_URL}/fish/${id || ""}`)
		fishDispatch({
			type: "GET_FISH_SUCCESS",
			fish: res.data,
			id
		})
		reqDispatch({
			type: "GET_FISH_SUCCESS"
		})
	} catch (err) {
		reqDispatch({
			type: "GET_FISH_ERROR",
			err
		})
	}
}
