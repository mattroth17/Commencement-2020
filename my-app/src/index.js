import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import im_background from './class_of_2020.jpg';


function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}


function Article(props) {
  return (
    <button className='article' onClick={props.onClick}>
      <img className='article_image' src={props.imageURL} />
      <div className='article_title'>{props.title}</div>
      <div className='article_author'>{props.author}</div>
    </button>
  );
}

class Header extends React.Component {

  render() {
    
    return (
      <div className="header">
        {/* <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div> */}
        
      </div>
    );
  }
}

class Background extends React.Component {

  render() {
    
    return (
      <div className="background">
        <img className="background-image" src={im_background} alt="class pic"/>
      </div>
    );
  }
}



class Messages extends React.Component {

  render() {
    
    return (
      <div className="messages">
      </div>
    );
  }
}

class Articles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [
        {
          title: 'Founder of Khan Academy Salman Khan to speak at virtual commencement', 
          URL: 'https://www.thedartmouth.com/article/2020/05/founder-of-khan-academy-salman-khan-to-speak-at-virtual-commencement', 
          imageURL: 'https://snworksceo.imgix.net/drt/c4546441-fd5f-4798-ba71-0bffc946729f.sized-1000x1000.jpg?w=1000', 
          author: 'The Dartmouth Senior Staff', 
          abstract: ''
        }, 
        {
          title: 'Amid Dartmouth’s uncertainty, peer schools offer early plans for fall term', 
          URL: 'https://www.thedartmouth.com/article/2020/05/amid-dartmouths-uncertainty-peer-schools-offer-early-plans-for-fall-term', 
          imageURL: 'https://snworksceo.imgix.net/drt/d3042f60-7e7d-4c71-b6f0-d3a4ed3d566b.sized-1000x1000.jpg?w=1000', 
          author: 'Andrew Sasser', 
          abstract: ''
        }, 
        {
          title: 'Dick’s House counseling navigates move to teletherapy', 
          URL: 'https://www.thedartmouth.com/article/2020/05/dicks-house-counseling-navigates-move-to-teletherapy', 
          imageURL: 'https://snworksceo.imgix.net/drt/4de71614-1b81-4f5c-8be4-63aa8d7030fc.sized-1000x1000.jpg?w=1000', 
          author: 'Aleka Kroitzsh', 
          abstract: ''
        }, 
        {
          title: '"Pine Pals” connects students and elderly Upper Valley residents though letters', 
          URL: 'https://www.thedartmouth.com/article/2020/05/pine-pals-connects-students-and-elderly-upper-valley-residents-though-letters', 
          imageURL: 'https://snworksceo.imgix.net/drt/81e4f4ab-01f4-48fa-84cb-ba6a3ae3bd1a.sized-1000x1000.jpg?w=1000', 
          author: 'Emily Lu', 
          abstract: ''}, 
        {
          title: 'With three representatives retiring, state Democrats plan for November', 
          URL: 'https://www.thedartmouth.com/article/2020/05/with-three-representatives-retiring-state-democrats-plan-for-november', 
          imageURL: 'https://snworksceo.imgix.net/drt/78d7a983-8db0-49b6-8fb3-e18a7e633f67.sized-1000x1000.jpg?w=1000', 
          author: 'Sam Ferrone', 
          abstract: ''
        }, 
        {
          title: 'Stony Brook professor Jason Barabas ’93 named director of Rockefeller Center', 
          URL: 'https://www.thedartmouth.com/article/2020/05/stony-brook-professor-jason-barabas-93-named-director-of-rockefeller-center', 
          imageURL: 'https://snworksceo.imgix.net/drt/99f11936-ac91-4d88-aa4c-faf91e340d91.sized-1000x1000.jpg?w=1000', 
          author: 'Emily Lu', 
          abstract: ''
        }, 
      
      ],
      
    }
  }

  handleClick(url) {
    window.open(url); 
  }

  renderArticle(i) {
    return ( 
      <Article 
        title={this.state.articles[i].title} 
        URL={this.state.articles[i].URL}
        onClick = {() => this.handleClick(this.state.articles[i].URL)}
        imageURL={this.state.articles[i].imageURL}
        author={this.state.articles[i].author}
        abstract={this.state.articles[i].abstract}
      />
    ); 
  }

  render() {
    
    return (
      <div className="articles">
        <div className="article-row">
          {this.renderArticle(0)}
          {this.renderArticle(1)}
        </div>
        <div className="article-row">
          {this.renderArticle(2)}
          {this.renderArticle(3)}
        </div>
        <div className="article-row">
          {this.renderArticle(4)}
          {this.renderArticle(5)}
        </div>
      </div>
    );
  }
}

class Page extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    // const history = this.state.history; 
    // const current = history[this.state.stepNumber];
    // const winner = calculateWinner(current.squares);

    // const moves = history.map((step, move) => {
    //   const desc = move ?
    //     'Go to move #' + move :
    //     'Go to game start';
    //     return (
    //       <li key={move}>
    //         <button onClick={() => this.jumpTo(move)}>{desc}</button>
    //       </li>
    //     );
    // });
    // let status; 
    // if (winner) {
    //   status = 'Winner: ' + winner; 
    // } else {
    //   status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O'); 
    // }
    return (
      <div className="page">
        <Header 
          // squares={current.squares}
          // onClick={(i) => this.handleClick(i)}
        />
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


function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

