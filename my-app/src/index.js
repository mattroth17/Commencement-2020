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
    <div className='article'>{props.title}</div>
  );
}


class Board extends React.Component {
  renderSquare(i) {
    return ( 
      <Square 
        value={this.props.squares[i]} 
        onClick={() => this.props.onClick(i)}
      />
    ); 
  }

  render() {
    
    return (
      <div>
        <div className="board-row">
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
        </div>
        
      </div>
    );
  }
}

class Header extends React.Component {

  render() {
    
    return (
      <div>
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
      <div>
        {/* <img src={im_background} width='100%' alt="class pic"/> */}
      </div>
    );
  }
}



class Messages extends React.Component {

  render() {
    
    return (
      <div>
      </div>
    );
  }
}

class Articles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [
        {title: 'article 1', URL: 'google.com', imageURL: './class_of_2020.jpg', author: 'jack'}, 
        {title: 'article 2', URL: 'google.com', imageURL: './class_of_2020.jpg', author: 'jack'}, 
        {title: 'article 3', URL: 'google.com', imageURL: './class_of_2020.jpg', author: 'jack'}, 
        {title: 'article 4', URL: 'google.com', imageURL: './class_of_2020.jpg', author: 'jack'}, 
        {title: 'article 5', URL: 'google.com', imageURL: './class_of_2020.jpg', author: 'jack'}, 
        {title: 'article 6', URL: 'google.com', imageURL: './class_of_2020.jpg', author: 'jack'}, 
      
      ],
      
    }
  }

  renderArticle(i) {
    return ( 
      <Article 
        title={this.state.articles[i].title} 
      />
    ); 
  }

  render() {
    
    return (
      <div>
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
  //   this.state = {
  //     history: [{
  //       squares: Array(9).fill(null),
  //     }],
  //     xIsNext: true,
  //     stepNumber: 0
  //   };
  }

  // renderReset() {
  //   return (
  //     <Reset
  //       onClick={() => this.resetClick()}
  //     />
  //   );
  // }

  // resetClick() {
  //   this.setState({
  //     history: [{
  //       squares: Array(9).fill(null),
  //     }],
  //     stepNumber: 0,
  //     xIsNext: true
  //    });
  // }


  // handleClick(i) {
  //   const history = this.state.history.slice(0, this.state.stepNumber + 1); 
  //   const current = history[history.length - 1];
  //   const squares = current.squares.slice();
  //   if (calculateWinner(squares) || squares[i]) {
  //     return; 
  //   }
  //   squares[i] = this.state.xIsNext ? 'X' : 'O'; 
  //   this.setState({
  //     history: history.concat([
  //       {
  //       squares: squares
  //       }
  //     ]),
  //     stepNumber: history.length, 
  //     xIsNext: !this.state.xIsNext
  //   });
  // }

  // jumpTo(step) {
  //   this.setState({
  //     stepNumber: step, 
  //     xIsNext: (step % 2) === 0
  //   });
  // }


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
        <div className="header">
          <Header 
            // squares={current.squares}
            // onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className='background'>
            <Background/>
        </div>
        <div className='messages'>
          <Messages/>
        </div>
        <div className='articles'>
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

