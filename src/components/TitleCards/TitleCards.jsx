import React, { useState,useEffect, useRef } from "react";
import "./TitleCards.css";
import { Link } from "react-router-dom";

const TitleCards = ({title,category,type}) => {
  const [apiData, setApiData] = useState([])
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}  `
    }
  };
  
  const handleWheel = (e) => {
    e.preventDefault();
    cardsRef.current.scrollLeft += e.deltaY*4;
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/${type?type:'movie'}/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res=> setApiData(res.results))
    .catch(err => console.error(err));
    
    cardsRef.current.addEventListener("wheel", handleWheel );

  }, []);

  return (
    <div className="title-cards">
      <h2>{title?title:"Popular On Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return (
            <Link to={`/player/${card.id}`} className="card" key={index}>
              <img src={`https://image.tmdb.org/t/p/w500`+ card.backdrop_path} alt={card.original_title} />
              <p>{card.original_title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
