
import React, { Component } from 'react'
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import beasts from './data.json';
import SelectedBeast from './SelectedBeast';
import { Form, FloatingLabel } from 'react-bootstrap';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      beasts: beasts,
      renderedBeast: {},
      hornNumber: beasts,
    }
  }

  closeModal = () => {
    this.setState( {show: false} );
  }

  openModal = (name) => {
    let renderedBeast = beasts.find(beast => beast.title === name) 
    this.setState( {renderedBeast: renderedBeast, show: true} );
  }

  beastFilter = (event) => {
    let hornAmt = event.target.value
    let filteredArr = beasts;
    if (hornAmt !== "all") {
      filteredArr = beasts.filter(beast => beast.horns === parseInt(hornAmt))
    }
    this.setState({ hornNumber: filteredArr })
  }

  render() {
    return (
      <div>
        <Header />
        <Form>
          <FloatingLabel label="Filter by horn amount.">
            <Form.Select onChange={this.beastFilter} aria-label="Default">
              <option value='all'>Show All</option>
              <option value='1'>One</option>
              <option value='2'>Two</option>
              <option value='3'>Three</option>
              <option value='100'>One Hundred</option>
            </Form.Select>
          </FloatingLabel>
        </Form>
        <Main beasts={this.state.hornNumber} openModal={this.openModal}/>
        <Footer />
        <SelectedBeast renderedBeast={this.state.renderedBeast} show={this.state.show} closeModal={this.closeModal}/>
      </div>
    )
  }
}

