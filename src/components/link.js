import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { ThemeContext } from '../defaultTheme';

export default class Link extends PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
      PropTypes.string,
    ]),
    style: PropTypes.object,
    href: PropTypes.string,
    underline: PropTypes.bool,
  };

  render() {
    const { children, style, href, underline } = this.props;

    return (
      <ThemeContext.Consumer>
        {theme => (
          <a
            style={{
              ...theme.common_text,
              ...theme.link,
              ...(underline && theme.link_underline),
              ...style,
            }}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            { children }
          </a>
        )}
      </ThemeContext.Consumer>
    );
  }
}
