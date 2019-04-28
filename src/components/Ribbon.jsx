import React from 'react';
import './Ribbon.css';

const theme = {
  green: {start: '#9BC90D', end: '#79A70A'},
  blue: {start: '#2989d8', end: '#1e5799'},
  red: {start: '#F70505', end: '#8F0808'},
  lightBlue: {start: '#05EFF7', end: '#087F8F'},
  gold: {start: '#F79E05', end: '#8F5408'},
}

const Ribbon = ({text, colorName}) => {

  let style = {
    background: `linear-gradient(${theme.red.start} 0%, ${theme.red.end} 100%)`
  }

  if (colorName in theme){
    style = {
      background: `linear-gradient(${theme[colorName].start} 0%, ${theme[colorName].end} 100%)`
    }
  }

  return <div className="ribbon"><span style={style}>{text}</span></div>
};

export default Ribbon;