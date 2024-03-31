import React from 'react';
import './menuStyle.css';
import List from '../../components/List/List';
import { Link, useNavigate } from 'react-router-dom';

const Menu = () => {
  const navigate = useNavigate();

  // logic for AM/PM
  const now = new Date();
  let estimate = "";
  if(now.getHours() > 12){
    estimate = "PM";
  } else {
    estimate = "AM";
  }

  // Array of indices to map over
  const indices = [0, 8, 16, 24, 32];

  // sticker based on AM/PM
  let sticker = "";

  if(estimate === "PM"){
    sticker = "public/moonrise.png";
  }
  else{
    sticker = "public/sunny-day.png";
  }

  // handle browser back button click
  const handleBackButtonClick = () => {
    navigate(-1); // navigate back to the previous page in history
  };

  return (
    <div className='container'>
      <div className="top">
        <div onClick={handleBackButtonClick} className="backbutton">
          <i className="fa-solid fa-arrow-left"></i>
        </div>
        <div className="heading">
          <h1>Daily Forecast</h1>
          <p>As of {now.getHours()}:{now.getMinutes()} {estimate} IST</p>
        </div>
        <div className="image">
          <img src={sticker} alt="" />
        </div>
      </div>

      <div className="body">
        {/* Map over indices and render List component for each */}
        {indices.map(index => (
          <List key={index} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
