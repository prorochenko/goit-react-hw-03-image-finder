import React, { PureComponent } from 'react';
import PictureFounfFail from './ImageError';
import FetchPhoto from '../../api/fetch';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

export default class ImageGallery extends PureComponent {
  state = {
    picture: null,
    error: null,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.pictureName !== this.props.pictureName) {
      this.setState({ status: 'pending' });
      fetch(
        `https://pixabay.com/api/?key=30395749-07b69c31ba3bc7894f96bd68a&q=${this.props.pictureName}&image_type=photo`
      )
        .then(res => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(
            new Error(
              `Sorry, we didn't find images with name "${this.props.pictureName}"`
            )
          );
        })

        .then(picture => this.setState({ picture, status: 'resolved' }))
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  render() {
    const { picture, error, status } = this.state;

    if (status === 'idle') {
      return <div>Enter picture Name</div>;
    }

    if (status === 'pending') {
      return <div>loading..</div>;
    }

    if (status === 'rejected') {
      return (
        <div>
          <PictureFounfFail message={error.message} />
        </div>
      );
    }

    if (status === 'resolved') {
      return <ImageGalleryItem picture={picture} />;
    }

    // return (
    //   <div>
    //     <h1>Hey</h1>
    //     {error && <div>no such a picture name</div>}
    //     <p>{pictureName}</p>
    //     {loading && <div>loading..</div>}
    //     {!picture && <div>Enter picture Name</div>}
    //     {picture && (
    //       <div>
    //         {picture.total}
    //         <img
    //           src={picture.hits[0].largeImageURL}
    //           alt={picture.hits[0].tags}
    //           width="300"
    //         />
    //       </div>
    //     )}
    //   </div>
    // );
  }
}
