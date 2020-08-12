/**
 * get the key associated with the value in an object
 * params: object = object, val = string
 * returns: key = string
 */

export const getKeyByValue = (obj, val) => {
	if (!obj || !val || (Object.keys(obj).length === 0 && obj.constructor === Object))
		return false
	const [key] = Object.keys(obj).filter(k => obj[k] === val)
	return key
}
