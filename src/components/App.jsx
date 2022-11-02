import React, { Component } from 'react';

import Searchbar from './Searchbar/Searchbar';

export default class App extends Component {
  // state = {
  //   contacts: '',
  //   filter: '',
  // };

  render() {
    return (
      <div>
        <Searchbar />
      </div>
    );
  }
}
