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
    underline: PropTypes.bool,
  };

  render() {
    const { children, style, href, underline } = this.props;

    return (
      <a
        style={{
          ...defaultStyles.common_text,
          ...defaultStyles.link,
          ...(underline && defaultStyles.link_underline),
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
