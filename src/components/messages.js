import React from 'react';
import * as db from '../services/datastore';
import {Box, Stack, Queue} from './layout';


export default class Messages extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        approved: [], 
      };
    }
  
    componentDidMount() {
      const setApproved = (value) => {
        if (value) this.setState({approved: Object.entries(value)})
      }
      db.fetchApproved(setApproved);
    }

    renderMessage = (mess) => {
      if (mess.length > 170) return `${mess.substring(0, 170)}...`;
      else return mess;
    }
  
    render() {
      return (
        <Box dir="col" align="center" width="100%" className="messages">
          <Stack size={100}></Stack>
          <div className="dear">Dear Class of 2020,</div>
          <Stack size={100}></Stack>
          <Box dir="row">
              <Queue size={100}></Queue>
              <Box dir="row">
              {this.state.approved.map(approvedNote => {
                return (
                  <>
                  <Box dir="col" align="flex">
                    <div className="message-box" style={{ transform: `rotate(${(Math.random() * 5) * (Math.floor(Math.random() * 2) === 1 ? 1 : -1)}deg)` }}>
                      {this.renderMessage(approvedNote[1])}
                    </div>
                  </Box>
                  <Queue size={50}></Queue>
                  </>
                );
              })}
              </Box>
            <Queue size={100}></Queue>
          </Box>
          <Stack size={100}></Stack>
          <div className="write-button" onClick={this.props.showModal}>Write a message</div>
          <Stack size={300}></Stack>
        </Box>
      );
    }
  }