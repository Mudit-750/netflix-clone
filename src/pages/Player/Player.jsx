import React, { useState, useEffect } from 'react';
import './Player.css';
import back_arrow from '../../assets/back-button.png';
import { useNavigate, useParams } from 'react-router-dom';


const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${TMDB_API_KEY} `
  }
}

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(res => res.json())
      .then(res => {
        setApiData(res.results[0] || null); // Handle no results
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setApiData(null);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className='player'>
      <img src={back_arrow} alt="Back" onClick={() => navigate(-1)} />

      {loading ? (
        <p>Loading trailer...</p>
      ) : apiData && apiData.key ? (
        <>
          <iframe
            width='85%'
            height='85%'
            src={`https://www.youtube.com/embed/${apiData.key}`}
            title='trailer'
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <div className="player-info">
            <p>{apiData.published_at?.slice(0, 10)}</p>
            <p>{apiData.name}</p>
            <p>{apiData.type}</p>
          </div>
        </>
      ) : (
        <div className="error-content">
          <p>Trailer not available</p>
        </div>
      )}
    </div>
  );
};

export default Player;
