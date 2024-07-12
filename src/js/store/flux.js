const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: []
		},
		actions: {
			loadCharacters: () => {
				fetch("https://www.swapi.tech/api/people/")
                    .then(res => res.json())
                    .then(data => {
						console.log(data);
						setStore({ characters: data.results });
					})
                    .catch(err => console.error(err));
			},
		}
	};
};

export default getState;