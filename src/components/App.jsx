import React, { PureComponent } from 'react';

import Searchbar from './Searchbar/Searchbar';
import Modal from './Modal/Modal';
import Button from './Button/Button';

export default class App extends PureComponent {
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
        {showModal && (
          <Modal onClose={this.toggleModal} onClick={this.toggleModal} />
        )}
      </div>
    );
  }
}
