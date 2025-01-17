import { array } from "prop-types";
import { json } from "react-router";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
		},
		actions: {
			loadCharacters: () => {
				fetch("https://www.swapi.tech/api/people/")
                    .then(res => res.json())
                    .then(async(data) => {
						console.log(data);
						const characters = await Promise.all([...
							data.results.map(async({name,url})=> {
							const response	= await fetch(url);
							
							const {description, properties} = (await response.json()).result
							return{
								description,...properties
							}
						})])
						
						
						setStore({ characters });
					})
					
                    .catch(err => console.error(err));
			},
			loadPlanets: () => {
				fetch("https://www.swapi.tech/api/planets/")
                    .then(res => res.json())
                    .then(async (data) => {
						console.log(data);
						const planets = await Promise.all(data.results.map(async ({ name, url }) => {
							const response = await fetch(url);
							const { description, properties } = (await response.json()).result;
							return {
								description, ...properties
							};
						}));

						setStore({ planets });
					})
                    .catch(err => console.error(err));
			}
		}
		
	};
	
};


export default getState;