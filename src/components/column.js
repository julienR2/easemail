import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

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
      <td style={style}>
        { children }
      </td>
    );
  }
}
