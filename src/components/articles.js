import React from 'react';
import {Box, Stack} from './layout';

export default class Articles extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        articles: [
          {
            hasMouse: 'no',
            title: 'Founder of Khan Academy Salman Khan to speak at virtual commencement', 
            URL: 'https://www.thedartmouth.com/article/2020/05/founder-of-khan-academy-salman-khan-to-speak-at-virtual-commencement', 
            imageURL: 'https://snworksceo.imgix.net/drt/c4546441-fd5f-4798-ba71-0bffc946729f.sized-1000x1000.jpg?w=1000', 
            author: 'The Dartmouth Senior Staff', 
            abstract: 'This year\u2019s virtual commencement speaker will be Salman Khan, founder of the free online education platform Khan Academy, Dartmouth announced on Thursday. The College selected Khan as commencement speaker before the switch to remote learning.'
          }, 
          {
            hasMouse: 'no',
            title: 'Amid Dartmouth’s uncertainty, peer schools offer early plans for fall term', 
            URL: 'https://www.thedartmouth.com/article/2020/05/amid-dartmouths-uncertainty-peer-schools-offer-early-plans-for-fall-term', 
            imageURL: 'https://snworksceo.imgix.net/drt/d3042f60-7e7d-4c71-b6f0-d3a4ed3d566b.sized-1000x1000.jpg?w=1000', 
            author: 'Andrew Sasser', 
            abstract: 'As Dartmouth students finish their virtual spring terms, many are looking to other colleges for information about how and if they will conduct their fall terms. While the College has yet to offer specific guidance on the fall, College President Phil Hanlon and Provost Joseph Helble announced on May 4 that a final decision regarding fall term will be made by June 29.'
          }, 
          {
            hasMouse: 'no',
            title: 'Dick’s House counseling navigates move to teletherapy', 
            URL: 'https://www.thedartmouth.com/article/2020/05/dicks-house-counseling-navigates-move-to-teletherapy', 
            imageURL: 'https://snworksceo.imgix.net/drt/4de71614-1b81-4f5c-8be4-63aa8d7030fc.sized-1000x1000.jpg?w=1000', 
            author: 'Aleka Kroitzsh', 
            abstract: 'For the first month of spring term, Dick\u2019s House was unable to offer counseling services to students outside of New Hampshire due to licensing restrictions that prevented counselors from practicing out of state. After state and regional health boards loosened restrictions in light of COVID-19, the Counseling Center has explored new ways to connect with students as the College moves into its second term of remote learning.'
          }, 
          {
            hasMouse: 'no',
            title: '"Pine Pals” connects students and elderly Upper Valley residents though letters', 
            URL: 'https://www.thedartmouth.com/article/2020/05/pine-pals-connects-students-and-elderly-upper-valley-residents-though-letters', 
            imageURL: 'https://snworksceo.imgix.net/drt/81e4f4ab-01f4-48fa-84cb-ba6a3ae3bd1a.sized-1000x1000.jpg?w=1000', 
            author: 'Emily Lu', 
            abstract: 'To facilitate social connection during the COVID-19 pandemic, Dartmouth students and faculty members have launched a letter-writing program called Pine Pals, connecting students and elderly people in New Hampshire and Vermont.'
          }, 
          {
            hasMouse: 'no',
            title: 'With three representatives retiring, state Democrats plan for November', 
            URL: 'https://www.thedartmouth.com/article/2020/05/with-three-representatives-retiring-state-democrats-plan-for-november', 
            imageURL: 'https://snworksceo.imgix.net/drt/78d7a983-8db0-49b6-8fb3-e18a7e633f67.sized-1000x1000.jpg?w=1000', 
            author: 'Sam Ferrone', 
            abstract: 'With three of Grafton County District 12\u2019s four representatives not seeking reelection, state representatives and organizers remain confident that Hanover will stay blue on Nov. 3, despite the pandemic\u2019s possible impact on student voter turnout.'
          }, 
          {
            hasMouse: 'no',
            title: 'Stony Brook professor Jason Barabas ’93 named director of Rockefeller Center', 
            URL: 'https://www.thedartmouth.com/article/2020/05/stony-brook-professor-jason-barabas-93-named-director-of-rockefeller-center', 
            imageURL: 'https://snworksceo.imgix.net/drt/99f11936-ac91-4d88-aa4c-faf91e340d91.sized-1000x1000.jpg?w=1000', 
            author: 'Emily Lu', 
            abstract: 'Following a year-long international search, the College announced on Wednesday that Stony Brook University political science professor Jason Barabas \u201993 has been appointed director of the Rockefeller Center for Public Policy. Barabas currently directs the master\u2019s program in public policy at Stony Brook and will begin his position at Dartmouth, where he will also teach as a government professor, on July 1.'
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
  
  

  
  