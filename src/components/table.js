import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Body extends PureComponent {
  static propTypes = {
    children: PropTypes.any,
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
