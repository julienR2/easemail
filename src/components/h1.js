/* eslint-disable react/no-danger */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { ThemeContext } from '../defaultTheme';

export default class H1 extends PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
      PropTypes.string,
    ]),
  };

  render() {
    const { children } = this.props;

    return (
      <ThemeContext.Consumer>
        {theme => (
          <h1
            style={{
              ...theme.common_text,
              ...theme.h1,
            }}
            dangerouslySetInnerHTML={{__html: children}}
          />
        )}
      </ThemeContext.Consumer>
    );
  }
}
