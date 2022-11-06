import React, { PureComponent } from 'react';
import { ToastContainer } from 'react-toastify';

import Searchbar from './Searchbar/Searchbar';
import Modal from './Modal/Modal';
import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
// import PictureFounfFail from './Loader/Loader';

export default class App extends PureComponent {
  state = {
    pictures: null,
    showModal: false,
    // loading: false,
    pictureName: '',
  };

  // componentDidMount() {
  //   this.setState({ loading: true });
  //   fetch('https://pixabay.com/api/?key=30395749-07b69c31ba3bc7894f96bd68a')
  //     .then(res => res.json())
  //     .then(pictures => this.setState({ pictures }));
  // }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  handleFormSubmit = pictureName => {
    console.log(pictureName);
    this.setState({ pictureName });
  };

  render() {
    const { showModal } = this.state;

    return (
      <div>
        <ToastContainer autoClose={3000} />
        <Searchbar onSubmit={this.handleFormSubmit} />
        <Button onClick={this.toggleModal} />
        {showModal && (
          <Modal onClose={this.toggleModal} onClick={this.toggleModal} />
        )}
        <ImageGallery pictureName={this.state.pictureName} />
      </div>
    );
  }
}
