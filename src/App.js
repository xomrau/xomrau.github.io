import React from 'react';
//import logo from './logo.svg';
import './App.css';
import TopBar from './components/TopBar';
import Content from './components/Content';
import Footer from './components/Footer';

export default class App extends React.Component {
  render() {
    return (<div className="App">
      <TopBar />
      <Content />
      <Footer />
    </div>);
  }
}
