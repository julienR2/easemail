import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Body extends PureComponent {
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
      <table cellSpacing="0" cellPadding="0" border="0" align="center" width="100%">
        <tbody>
          <tr>
            <td>
              { children }
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}
