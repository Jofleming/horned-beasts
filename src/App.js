
import React, { Component } from 'react'
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import beasts from './data.json';
import SelectedBeast from './SelectedBeast';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      beasts: beasts,
      renderedBeast: {},
    }
  }

  closeModal = () => {
    this.setState( {show: false} );
  }

  openModal = (name) => {
    let renderedBeast = beasts.find(beast => beast.title === name) 
    this.setState( {renderedBeast: renderedBeast, show: true} );
  }

  render() {
    return (
      <div>
        <Header />
        <Main beasts={this.state.beasts} openModal={this.openModal}/>
        <Footer />
        <SelectedBeast renderedBeast={this.state.renderedBeast} show={this.state.show} closeModal={this.closeModal}/>
      </div>
    )
  }
}

