import React from 'react';
import * as db from '../services/datastore';
import InputMessage from './InputMessage';


export default class Messages extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        approved: [], 
      };
    }
  
    componentDidMount() {
      const setApproved = (value) => {
        this.setState({approved: Object.entries(value)})
      }
      db.fetchApproved(setApproved);
    }
  
    render() {
      return (
        <div className="messages">
          <InputMessage/>
          <h3>Messages for the seniors: </h3>
          <div className="message-column">
            {this.state.approved.map(approvedNote => {
              return (
                <div className="approvedMessage">
                  {approvedNote[1]}
                </div>
              )
            })}
          </div>
        </div>
      );
    }
  }