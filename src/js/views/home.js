import React from "react";
import "../../styles/home.css";
import { CardList } from "./cardlist";
import { PlanetList } from "./planetlist";

export const Home = () => {
	return (
	  <div>
		<h1>Characters</h1>
		<CardList />
		<h1>Planets</h1>
		<PlanetList />
	  </div>
	);
  };