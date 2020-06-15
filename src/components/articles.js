import React from 'react';
import {Box, Stack} from './layout';

export default class Articles extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        articles: [
          {
            hasMouse: 'no',
            title: 'A history of Commencement ceremonies', 
            URL: 'https://www.thedartmouth.com/article/2020/06/a-history-of-commencement-ceremonies', 
            imageURL: 'https://snworksceo.imgix.net/drt/aeedfb43-f768-4d89-b67a-800ebbef9393.sized-1000x1000.jpg?w=1000', 
            author: 'Reilly Olinger', 
            abstract: 'Dartmouth\u2019s first Commencement ceremony, held in 1771, bore very little resemblance to the modern graduation ceremony \u2014 and even less to the virtual ceremony that will be held for the Class of 2020 this June. However, the purpose of Commencement has held true over time.'
          }, 
          {
            hasMouse: 'no',
            title: 'Speaking Out: Stories of Change and Changemakers in Dartmouth’s Recent LGBTQ History', 
            URL: 'https://www.thedartmouth.com/article/2020/06/speaking-out-stories-of-change-and-changemakers-in-dartmouths-recent-lgbtq-history', 
            imageURL: 'https://snworksceo.imgix.net/drt/959cbb61-6720-4e3c-afbd-edae52c1d413.sized-1000x1000.jpg?w=1000', 
            author: 'Caris White', 
            abstract: 'The completion of a Dartmouth education means many things: celebration, new opportunities and hopefully the joyful acknowledgement of four transformative years. As Commencement rolls around, our natural inclination is to reflect on how Dartmouth changed us. However, I find it equally valuable to examine the ways in which we changed Dartmouth.'
          }, 
          {
            hasMouse: 'no',
            title: 'Four years of campus news seen by the Class of 2020', 
            URL: 'https://www.thedartmouth.com/article/2020/06/four-years-of-campus-news-seen-by-the-class-of-2020', 
            imageURL: 'https://snworksceo.imgix.net/drt/d667fd66-b01f-4f2d-aee5-29ef13fcb412.sized-1000x1000.jpg?w=1000', 
            author: 'Andrew Sasser', 
            abstract: ''
          }, 
          {
            hasMouse: 'no',
            title: 'Q&A with College President Phil Hanlon', 
            URL: 'https://www.thedartmouth.com/article/2020/06/q-a-with-college-president-phil-hanlon-commencement-2020', 
            imageURL: 'https://snworksceo.imgix.net/drt/b4117ad7-3b71-44da-8ba5-00c57ed12d8b.sized-1000x1000.jpg?w=1000', 
            author: 'Christina Baris and Ioana Andrada Pantelimon', 
            abstract: ''
          }, 
          {
            hasMouse: 'no',
            title: 'Class of 2020: Senior Survey', 
            URL: 'https://www.thedartmouth.com/article/2020/06/class-of-2020-senior-survey', 
            imageURL: 'https://snworksceo.imgix.net/drt/13a38115-4a75-4238-9787-78fafe32ae13.sized-1000x1000.png?w=1000', 
            author: 'William Chen, Aaron Lee and Saunak Badam', 
            abstract: ''
          }, 
          {
            hasMouse: 'no',
            title: 'Graduating into uncertainty: Alumni reflect, give advice to Class of 2020', 
            URL: 'https://www.thedartmouth.com/article/2020/06/graduating-into-uncertainty-alumni-reflect-give-advice-to-class-of-2020', 
            imageURL: 'https://snworksceo.imgix.net/drt/c72c4954-350d-4a8b-b25b-581cf17084d3.sized-1000x1000.jpg?w=1000', 
            author: 'Zach Gorman', 
            abstract: ''
          }, 
          {
            hasMouse: 'no',
            title: 'Seniors give back through nonprofit work, fundraising efforts', 
            URL: 'https://www.thedartmouth.com/article/2020/06/seniors-give-back-through-nonprofit-work-fundraising-efforts', 
            imageURL: 'https://snworksceo.imgix.net/drt/c999f5c0-d257-4c4d-9d0c-32973f49ab1e.sized-1000x1000.jpg?w=1000', 
            author: 'Marimac McRae', 
            abstract: ''
          }, 
          {
            hasMouse: 'no',
            title: 'Seniors reflect on their artistic journeys at Dartmouth', 
            URL: 'https://www.thedartmouth.com/article/2020/06/seniors-reflect-on-their-artistic-journeys-at-dartmouth', 
            imageURL: 'https://snworksceo.imgix.net/drt/a77b2835-1f76-486d-8486-2cd345330c44.sized-1000x1000.jpg?w=1000', 
            author: 'Emily Zhang', 
            abstract: ''
          }, 
          {
            hasMouse: 'no',
            title: 'Student Assembly: Reflecting on four years of leadership and change', 
            URL: 'https://www.thedartmouth.com/article/2020/06/student-assembly-reflecting-on-four-years-of-leadership-and-change', 
            imageURL: 'https://snworksceo.imgix.net/drt/3242c77b-6388-4d8e-b6e3-b2eabf13210e.sized-1000x1000.jpg?w=1000', 
            author: 'Pierce Wilson', 
            abstract: ''
          }, 
          {
            hasMouse: 'no',
            title: 'Senior fellows adapt to COVID-19 challenges', 
            URL: 'https://www.thedartmouth.com/article/2020/06/senior-fellows-adapt-to-covid-19-challenges', 
            imageURL: 'https://snworksceo.imgix.net/drt/ad01ac80-de5a-4a9b-9b2f-24a2061022ee.sized-1000x1000.jpg?w=1000', 
            author: 'Jacob Strier', 
            abstract: ''
          }, 
          {
            hasMouse: 'no',
            title: "Editors' Note", 
            URL: 'https://www.thedartmouth.com/article/2020/06/editors-note-commencement-issue-2020', 
            imageURL: 'https://snworksceo.imgix.net/drt/bb411e79-42cc-4716-b66c-5522b1233251.sized-1000x1000.JPG?w=1000', 
            author: 'Christina Baris and Ioana Andrada Pantelimon', 
            abstract: ''
          }, 
          {
            hasMouse: 'no',
            title: 'Han: Graduates of Pandemic',
            URL: 'https://www.thedartmouth.com/article/2020/06/han-graduates-of-pandemic',
            imageURL: 'https://snworksceo.imgix.net/drt/a3c4f0cf-626c-4d20-a972-cf93cd3acbb0.sized-1000x1000.jpg?w=1000',
            author: 'Debora Hyemin Han', 
            abstract: ''
          }, 
          {
            hasMouse: 'no',
            title: 'Fredman: On Plans and Laughter',
            URL: 'https://www.thedartmouth.com/article/2020/06/fredman-on-plans-and-laughter',
            imageURL: 'https://snworksceo.imgix.net/drt/fb7ed98d-3ba6-4b7d-9623-1a419ffa4f30.sized-1000x1000.jpg?w=1000',
            author: 'Alex Fredman', 
            abstract: ''
          }, 
          {
            hasMouse: 'no',
            title: "Sheinberg: Keeping the Door Open", 
            URL: 'https://www.thedartmouth.com/article/2020/06/sheinberg-keeping-the-door-open',
            imageURL: 'https://snworksceo.imgix.net/drt/91ba944e-d8ee-473d-8389-4352d5a19c37.sized-1000x1000.jpg?w=1000',
            author: 'Aidan Sheinberg', 
            abstract: ''
          }, 
        
        ],
        
      }
    }
  
    handleClick(url) {
      window.open(url); 
    }
  
    handleMouse(i){
      this.setState((state, props) => {
        return {hasMouse: [this.state.articles[i].hasMouse = 'yes']}
      }
      )
    }
    handleLeave(i){
      this.setState((state, props) => {
        return {hasMouse: [this.state.articles[i].hasMouse = 'no']}
      }
      )
    }
  
  
    renderArticle(i) {
      if(this.state.articles[i].hasMouse === 'no'){
        return ( 
          <Article 
            onMouseEnter = {() => this.handleMouse(i)}
            onMouseLeave = {() => this.handleLeave(i)}
            title={this.state.articles[i].title} 
            URL={this.state.articles[i].URL}
            onClick = {() => this.handleClick(this.state.articles[i].URL)}
            imageURL={this.state.articles[i].imageURL}
            author={this.state.articles[i].author}
          />
              );
      }
      else{
        return(
          <Abstract
            onMouseEnter = {() => this.handleMouse(i)}
            onMouseLeave = {() => this.handleLeave(i)}
            abstract={this.state.articles[i].abstract}
            URL={this.state.articles[i].URL}
            onClick = {() => this.handleClick(this.state.articles[i].URL)}
          />
        )
      }
    }
  
    render() {
      return (
        <Box dir="col" className="articles">
          {this.state.articles.map((article, idx) => {
            return this.renderArticle(idx);
          })}
        </Box>
      );
    }
}

function Article(props) {
  return (
    <Box dir="col" width={350} pad={[25, 50]} className='article'
      onClick={props.onClick}
      onMouseEnter = {props.onMouseEnter}
      onMouseLeave = {props.onMouseLeave}>
      <img className='article_image' src={props.imageURL} alt="article thumbnail" />
      <Stack size={25}></Stack>
      <div className='article_title'>{props.title}</div>
      <Stack size={10}></Stack>
      <div className='article_author'>{props.author}</div>
    </Box>
  );
}

function Abstract(props) {
  return (
    <Box dir="col" width={300} className='article'
      onClick={props.onClick}
      onMouseEnter = {props.onMouseEnter}
      onMouseLeave = {props.onMouseLeave}>
      <div className='article_abstract'>{props.abstract}</div>
    </Box>
  );
}
  
  

  
  