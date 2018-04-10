import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Row from './row';

export default class Body extends PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.instanceOf(Row)),
      PropTypes.instanceOf(Row)
    ]),
    style: PropTypes.object,
  };

  render() {
    const { children, style } = this.props;

    return (
      <table style={style} cellSpacing="0" cellPadding="0" border="0" align="center" width="100%">
        <tbody>
          { children }
        </tbody>
      </table>
    );
  }
}
