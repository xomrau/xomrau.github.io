import React from 'react';
import './Content.css';
import works from './constants/works';

const Intro = () => {
    //TODO
    return (<section className="intro pb-50">
        <p>I put some of my projects here<br />Hope you enjoy your stay <br />Check out my <span className="link"><a href="https://github.com/xomrau">Github</a></span> for what I'm working on!</p>
    </section>);
};

const Work = (props) => {
    return (<section className="main pb-50">
        <h2 id="work" className="header">&#8226;THINGS I MADE&#8226;</h2>
        <div className="work">
            <ul>
                {works.map(work => (
                    <li className="work-item">
                        <div className="work-img"><a href={work.url} target="_blank" rel="noopener noreferrer"><img src={work.img} alt="." /></a></div>
                        <p className="work-title">{work.title} - </p>
                        <p className="work-description">{work.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    </section>);
};

const About = () => {
    return (<section className="pb-50">
        <h2 id="about" className="header">&#8226;A BIT ABOUT ME&#8226;</h2>
        <p>I'm into web dev.<br />Creating tools and apps that make my daily tasks more efficient. </p>
    </section>);
};

const Content = () => {
    return (<div className="content">
        <Intro />
        <Work />
        <About />
    </div>)
};

export default Content;