import React from 'react';
import * as db from '../services/datastore';
import after_submit from '../teal-check-mark.png';


export default class InputMessage extends React.Component {

    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.submitted = false; 
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      event.preventDefault();
      this.setState({submitted: true});
      db.addNote(this.state.value);

    }
  
    render() {
      return (
        <div className='inputMessage'>
          {!this.state.submitted && (
          <form onSubmit={this.handleSubmit}>
            <label>
              Leave a message for the seniors!
              <input className="inputBox" type="text" placeholder="Your message here" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input className="submit" type="submit" value="Submit" />
          </form>
          )}
          {this.state.submitted && (
            <div className="afterSubmit">
              <h2 classNam="after_submit_message">Your message has been submitted!</h2>
              <img className='after_submit_image' src={after_submit} alt="green check mark"/>
              </div>
          )}
        </div>
      );
    }
  
}