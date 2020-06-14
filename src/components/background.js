import React from 'react';
import {Box, Stack} from './layout';
import im_background from '../class_of_2020.jpg';

export default class Background extends React.Component {

    render() {
      
      return (
        <div className="background">
          <img className="background-image" src={im_background} alt="class pic"/>
          <Box dir="col" align="start" className="m">
            <div className="congrats one">Hello Class of 2020,</div>
            <Stack size={25}></Stack>
            <div className="congrats two">Congrats!</div>
          </Box>
        </div>
      );
    }
  }