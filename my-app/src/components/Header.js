import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <header className='header'>
        <div className='flex jsb container'>
          <strong>Quiz App</strong>
        </div>
      </header>
    );
  }
}

export default Header;