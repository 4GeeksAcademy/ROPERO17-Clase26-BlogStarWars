import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext"; 
import "../../styles/home.css";

export const CardList = ({character}) => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.loadCharacters(); 
    
  }, [actions]);

  if (!store.characters.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className="card-list-container">
      <div className="card-list">
        {store.characters.map(character => (
          <div className="card" key={character.uid}>
            <img src="https://starwars-visualguide.com/#/" className="card-img-top" alt={character.name} />
            <div className="card-body">
              <h5 className="card-title">{character.name}</h5>
                <p className="card-content">{character.birth_year}{character.eye_color}{character.gender} </p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};