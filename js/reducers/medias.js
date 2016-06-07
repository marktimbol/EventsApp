
const medias = (state = [], action) => {
	switch(action.type)
	{
		case 'MEDIA_PARTNERS_WAS_FETCHED':
			return action.medias;
		default:
			return state;
	}
}

export default medias;