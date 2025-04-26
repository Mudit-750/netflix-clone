import React, { useState,useRef,useEffect } from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import  hero from '../../assets/witcher2.jpg';
import  hero_banner from '../../assets/witcher.jpg';
import  hero_title from '../../assets/witcher_caption2.png';
import witcher_video from "../../assets/witcher_video.mp4"
import play_btn from '../../assets/play-btn.svg'
import pause from '../../assets/pause.svg'
import info from '../../assets/info-icon.svg'
import TitleCards from "../../components/TitleCards/TitleCards";
import Footer from "../../components/Footer/Footer";
import mute from '../../assets/mute.svg'
import volume from '../../assets/volume.svg'


const Home = () => {
  const [playVideo, setPlayVideo] = useState(false)
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef(null);
  


  useEffect(() => {
    if (playVideo && videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
      
    }
    
  }, [playVideo]);

  const handlePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };
  const toggleMute = () => {
    const video = videoRef.current;
    video.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        
        {playVideo ? (<>
            <video src={witcher_video} ref={videoRef} className="banner-img"  
            muted={isMuted} controls={false} playsInline  preload="metadata"/>
            <div className="custom-controls">
              <button onClick={handlePlayPause}><div className="play-btn" >
                <img src={isPlaying ? pause:play_btn} /></div>
              </button>
              <button onClick={toggleMute}>
                <div className="play-btn"><img aria-label="play/pause" src={isMuted?mute:volume}/></div>
                </button>
            </div>
          </>
        ) : (
          <img src={hero_banner} alt="" className="banner-img" />
        )}
        <div className="hero-caption">
          <img src={hero_title} alt="" className="caption-img" />
          {playVideo?<p></p>:<p>
            Geralt of Rivia, a solitary monster hunter, struggles to find his
            place in a world where people often prove more wicked than beasts.
          </p>}
          
          <div className="hero-btns">
            
            <button className="btn" onClick={()=>setPlayVideo(!playVideo)}>
              <img src={play_btn} alt="" />
              {playVideo? "BACK":"PLAY"}
            </button>
            
            
            <button className="btn dark-btn" >

              <img src={info} alt="" />
              More Info
            </button>
          </div>
          <TitleCards />
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"Only on Netflix"}  category={'top_rated'}/>
        <TitleCards title={"Blockbuster Movies"}  category={'popular'}/>
        <TitleCards title={"Upcoming "}  category={'upcoming'}/>
        <TitleCards title={"Airing Today"} type={'tv'} category={'airing_today'} />
        <TitleCards title={"On the air"} type={'tv'} category={'on_the_air'} />
        <TitleCards title={"Popular"} type={'tv'} category={'popular'} />
        <TitleCards title={"Top Picks for You"} />
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
  