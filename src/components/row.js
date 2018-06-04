import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Row extends PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.object),
      PropTypes.object
    ]),
    style: PropTypes.object,
  };

  render() {
    const { children, style } = this.props;

    return (
      <tr style={style}>
        { children }
      </tr>
    );
  }
}
