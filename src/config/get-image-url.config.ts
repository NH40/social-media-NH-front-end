export const getImageUrl = (url = '') =>
	url ? process.env.BACK_URL + url : null
