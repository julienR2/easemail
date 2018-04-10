import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Column from './column';

export default class Row extends PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.instanceOf(Column)),
      PropTypes.instanceOf(Column)
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
