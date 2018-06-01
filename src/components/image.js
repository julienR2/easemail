import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { ThemeContext } from '../defaultTheme';

export default class Image extends PureComponent {
  static propTypes = {
    style: PropTypes.object,
    src: PropTypes.string,
    alt: PropTypes.string,
  };

  render() {
    const { style, src, alt } = this.props;

    return (
      <ThemeContext.Consumer>
        {theme => (
          <img
            src={src}
            alt={alt}
            style={{
              ...theme.image,
              ...style,
            }}
            border="0"
            width={(style && style.width) || theme.image.width}
            height={(style && style.height) || theme.image.height}
          />
        )}
      </ThemeContext.Consumer>
    );
  }
}
