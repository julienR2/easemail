import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import defaultStyles from '../defaultStyles';

export default class Image extends PureComponent {
  static propTypes = {
    style: PropTypes.object,
    src: PropTypes.string,
    alt: PropTypes.string,
  };

  render() {
    const { style, src, alt } = this.props;

    return (
      <img
        src={src}
        alt={alt}
        style={{
          ...defaultStyles.image,
          ...style,
        }}
        border="0"
        width={(style && style.width) || defaultStyles.image.width}
        height={(style && style.height) || defaultStyles.image.height}
      />
    );
  }
}
