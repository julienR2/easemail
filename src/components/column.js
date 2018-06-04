import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { ThemeContext } from '../defaultTheme';

export default class Column extends PureComponent {
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
          <td style={{...theme.column, ...style}}>
            { children }
          </td>
        )}
      </ThemeContext.Consumer>
    );
  }
}
