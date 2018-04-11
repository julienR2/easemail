import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import defaultStyles from '../defaultStyles';

export default class Link extends PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
      PropTypes.string,
    ]),
    style: PropTypes.string,
    href: PropTypes.string,
  };

  render() {
    const { children, style, href } = this.props;

    return (
      <a
        style={{
          ...defaultStyles.common_text,
          ...defaultStyles.link,
          ...style,
        }}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        { children }
      </a>
    );
  }
}
