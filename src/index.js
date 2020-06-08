import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



// importing components
import Messages from './components/messages';
import Header from './components/header';
import Articles from './components/articles'; 
import Background from './components/background';

class Page extends React.Component {
    
  render() {
    
    return (
      <div className="page">
        <Header/>
        <Background/>
        <div className="bottom-part">
          <Messages/>
          <Articles/>
        </div>
      </div>
    );
  }
}


// ========================================

ReactDOM.render(
  <Page />,
  document.getElementById('root')
);



