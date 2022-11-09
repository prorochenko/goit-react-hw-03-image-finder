// import React from 'react';
// import PictureFounfFail from './ImageError';
// import * as API from '../../Services/images-fetch';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
// import LoadingComponent from '../Loader/Loader';

// export default class ImageGallery extends PureComponent {
//   state = {
//      searchWord: '',
//     picture: null,
//     error: null,
//     status: 'idle',
//     page: 1,
//   };

// async componentDidUpdate(prevProps, prevState) {
//   const { page } = this.state;

//   if (prevProps.pictureName !== this.props.pictureName) {
//     try {
//       this.setState({ status: 'pending' });
//       const images = await API.FetchPhoto(this.props.pictureName, page);
//       if (images.length === 0) {
//         return Promise.reject(
//           new Error(
//             `Sorry, we didn't find images with name "${this.props.pictureName}"`
//           )
//         );
//       } else {
//         this.setState({
//           imeages: this.props.pictureName,
//           status: 'resolved',
//         });
//       }
//     } catch (error) {
//       this.setState({ error, status: 'rejected' });
//     }
//   }
// }

//     fetch(
//       `https://pixabay.com/api/?key=30395749-07b69c31ba3bc7894f96bd68a&q=${this.props.pictureName}&image_type=photo`  //     )
//       .then(res => {
//         if (res.ok) {
//           return res.json();
//         }
//         return Promise.reject(
//           new Error(
//             `Sorry, we didn't find images with name "${this.props.pictureName}"`
//           )
//         );
//       })

//       .then(picture => this.setState({ picture, status: 'resolved' }))
//       .catch(error => this.setState({ error, status: 'rejected' }));
//   }
// }

const ImageGallery = ({ images }) => {
  const elements = images.map(image => (
    <ImageGalleryItem
      key={image.id}
      webformatURL={image.webformatURL}
      tags={image.tags}
      largeImageURL={image.largeImageURL}
    />
  ));

  return <ul>{elements}</ul>;
};
export default ImageGallery;

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
