import { Component } from 'react';
import Modal from '../Modal/Modal';
// import css from './ImageGalleryItem/ImageGalleryItem.module.css';

// export default function ImageGalleryItem({ picture: { hits } }) {
//   return (
//     <ul>
//       <li key={hits[0].id}>
//         <img src={hits[0].largeImageURL} alt={hits[0].tags} width="300" />
//       </li>
//     </ul>
//   );
// }

class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { id, webformatURL, largeImageURL, tags } = this.props;
    return (
      <>
        <li key={id}>
          <img src={webformatURL} alt={tags} onClick={this.toggleModal} />
        </li>
        {this.state.showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImageURL} alt={tags} />
          </Modal>
        )}
      </>
    );
  }
}

export default ImageGalleryItem;
