import React, { PureComponent } from 'react';

export default class ImageGallery extends PureComponent {
  render() {
    return (
      <div>
        <h1>Hey</h1>
        <p>{this.props.pictureName}</p>
      </div>
    );
  }
}
