/* eslint-disable react/no-danger */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { ThemeContext } from '../defaultTheme';

export default class ListItem extends PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
      PropTypes.string,
    ]),
    style: PropTypes.object,
  };

  render() {
    const { children, style } = this.props;

    return (
      <ThemeContext.Consumer>
        {theme => (
          <li
            style={{
              ...theme.common_text,
              ...theme.listItem,
              ...style,
            }}
            dangerouslySetInnerHTML={{__html: children}}
          />
        )}
      </ThemeContext.Consumer>
    );
  }
}
