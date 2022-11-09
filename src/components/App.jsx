import React, { PureComponent } from 'react';
import { ToastContainer } from 'react-toastify';

import Searchbar from './Searchbar/Searchbar';
import Modal from './Modal/Modal';
import { Button } from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import * as API from '../Services/images-fetch';
import LoadingComponent from './Loader/Loader';
import PictureFoundFail from './ImageGallery/ImageError';
// import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';

export default class App extends PureComponent {
  state = {
    // pictures: null,
    images: [],

    showModal: false,
    // loading: false,
    pictureName: '',
    // picture: null,
    error: null,
    status: 'idle',
    page: 1,
  };

  // componentDidMount() {
  //   this.setState({ loading: true });
  //   fetch('https://pixabay.com/api/?key=30395749-07b69c31ba3bc7894f96bd68a')
  //     .then(res => res.json())
  //     .then(pictures => this.setState({ pictures }));
  // }
  async componentDidUpdate(prevProps, prevState) {
    const { page, pictureName } = this.state;

    if (prevState.pictureName !== pictureName || prevState.page !== page) {
      try {
        this.setState({ status: 'pending' });
        const images = await API.FetchPhoto(pictureName, page);
        if (images.length === 0) {
          return Promise.reject(
            new Error(`Sorry, we didn't find images with name "${pictureName}"`)
          ).catch(error => this.setState({ error, status: 'rejected' }));
        } else {
          this.setState(prevState => ({
            images: [...prevState.images, ...images],
            status: 'resolved',
          }));
          console.log(images);
        }
      } finally {
        this.setState({ status: 'idle' });
      }
    }
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  handleFormSubmit = pictureName => {
    console.log(pictureName);
    this.setState({ pictureName, images: [], page: 1 });
  };

  render() {
    const { showModal, error, status, images } = this.state;

    // if (status === 'idle') {
    //   return <div>Enter picture Name</div>;
    // }

    // if (status === 'pending') {
    //   return (
    //     <div>
    //       <LoadingComponent />
    //     </div>
    //   );
    // }

    // if (status === 'rejected') {
    //   return (
    //     <div>
    //       <PictureFounfFail message={error.message} />
    //     </div>
    //   );
    // }

    // if (status === 'resolved') {
    //   return <ImageGalleryItem picture={picture} />;
    // }

    return (
      <div>
        <ToastContainer autoClose={3000} />

        <Searchbar onSubmit={this.handleFormSubmit} />

        {status === 'idle' && images.length === 0 ? (
          <div>Enter picture Name</div>
        ) : (
          ''
        )}
        {status === 'pending' ? (
          <div>
            <LoadingComponent />
          </div>
        ) : (
          ''
        )}
        {status === 'rejected' ? (
          <div>
            <PictureFoundFail message={error.message} />
          </div>
        ) : (
          ''
        )}
        {/* {status === 'resolved' ? <ImageGallery images={images} /> : ''} */}
        <ImageGallery images={images} />
        {images.length > 0 && <Button onClick={this.loadMore} />}

        {showModal && (
          <Modal onClose={this.toggleModal} onClick={this.toggleModal} />
        )}
        {/* <ImageGallery
          images={images}
          pictureName={this.state.pictureName} page={1}
        />  */}
      </div>
    );
  }
}
