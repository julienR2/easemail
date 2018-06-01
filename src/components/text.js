import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { ThemeContext } from '../defaultTheme';

export default class Text extends PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
      PropTypes.string,
    ]),
    style: PropTypes.object,
    secondary: PropTypes.bool,
  };

  render() {
    const { children, style, secondary } = this.props;

    return (
      <ThemeContext.Consumer>
        {theme => (
          <p
            style={{
              ...theme.common_text,
              ...(secondary && theme.text_secondary),
              ...style,
            }}
          >
            { children }
          </p>
        )}
      </ThemeContext.Consumer>
    );
  }
}
