import React, { Component } from 'react';

import Searchbar from './Searchbar/Searchbar';
import Modal from './Modal/Modal';
import Button from './Button/Button';

export default class App extends Component {
  state = {
    contacts: '',
    filter: '',
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;

    return (
      <div>
        <Searchbar />
        <Button onClick={this.toggleModal} />
        {showModal && <Modal />}
      </div>
    );
  }
}
