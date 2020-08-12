/**
 * search data with item name that begins with the term that is passed in
 * params: data = object, term = string
 * return array of matched objects
 */

export const searchData = (data, term) => {
	if (!data || !data.length || !term) return []
	const re = new RegExp(`^${term}{1}`, "g")

	return data.filter(d => d.name["name-USen"].search(re) !== -1)
}
