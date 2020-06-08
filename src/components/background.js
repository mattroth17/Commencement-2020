import React from 'react';
import im_background from '../class_of_2020.jpg';

export default class Background extends React.Component {

    render() {
      
      return (
        <div className="background">
          <img className="background-image" src={im_background} alt="class pic"/>
          <h4><span>Congratulations to our Dartmouth College class of 2020!</span></h4>
        </div>
      );
    }
  }