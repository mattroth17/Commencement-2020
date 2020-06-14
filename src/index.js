import React from 'react';
import ReactDOM from 'react-dom';
import * as db from './services/datastore';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

// importing components
import {Modal, Form} from 'react-bootstrap';
import {Box, Stack, Queue} from './components/layout';
import Messages from './components/messages';
import Header from './components/header';
import Articles from './components/articles'; 
import Background from './components/background';

class Page extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      message: null,
    }
  }
    
  render() {
    
    return (
      <>
        <Box dir="row" className="a">
          <Background/>
          <Articles/>
        </Box>
        <Messages showModal={() => this.setState({showModal: true})}/>
        <Modal
            show={this.state.showModal}
            onClose={() => this.setState({showModal: false})}
            centered
            >
              <Box dir="col">
                  {/* <div style={{color: 'white', fontSize: '24px'}}>Send a message</div> */}
                  <Stack size={25}></Stack>
                  <textarea placeholder="Write your message here" value={this.state.message} onChange={(event) => this.setState({message: event.target.value})}></textarea>
                  <Stack size={25}></Stack>
                  <Box dir="row" justify="end">
                    <div className="submit-button" onClick={() => this.setState({showModal: false})}>Cancel</div>
                    <Queue size={50}></Queue>
                    <div className="submit-button" onClick={() => {db.addNote(this.state.message); this.setState({showModal: false});}}>Submit</div>
                  </Box>
              </Box>
        </Modal>
      </>
    );
  }
}


// ========================================

ReactDOM.render(
  <Page />,
  document.getElementById('root')
);



