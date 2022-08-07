import { useState } from 'react';
import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';
import UnderCon from './UnderCon.js';

const TEXT = ["compile ", "stop "];

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];

const SYMBOL = [ 'fa-solid fa-play', 'fa-solid fa-stop']

var timesClicked = 0;
export const Button = ({buttonStyle, buttonSize
}) => {
  const [isShown, setIsShown] = useState(false);
  const [text, setText] = useState(TEXT[0]);
  const [symbol, setSymbol] = useState(SYMBOL[0]);
  
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  const onClick = () => {
    timesClicked++;
    if((timesClicked%2) === 0){
      setIsShown(false);
      setText(TEXT[0]);
      setSymbol(SYMBOL[0]);
    }
    else{
      setIsShown(true);
      setText(TEXT[1]);
      setSymbol(SYMBOL[1]);
    }

  }

  return (
    <Link to='/LandingPage'>
      <button className={`compile_button ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick}>
      {text} <i class = {symbol}/></button>
      {isShown && <UnderCon/>}
    </Link>
  )
};