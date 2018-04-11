import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Row from './row';
import Column from './column';

import defaultStyles from '../defaultStyles';

export default class Body extends PureComponent {
  static propTypes = {
    children: PropTypes.any,
    style: PropTypes.object,
  };

  render() {
    const { children, style } = this.props;

    return (
      <table style={{ ...defaultStyles.table, ...style }} cellSpacing="0" cellPadding="0" border="0" align="center" width="100%">
        <tbody>
          <Row>
            <Column style={{
                padding: '0 16px',
              }}
            >
              <table
                style={{ ...defaultStyles.table, maxWidth: '504px' }}
                cellSpacing="0"
                cellPadding="0"
                border="0"
                align="center"
                width="100%"
              >
                <tbody>
                  { children }
                </tbody>
              </table>
            </Column>
          </Row>
        </tbody>
      </table>
    );
  }
}
