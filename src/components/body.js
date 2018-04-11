import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Table from './table';
import Row from './row';
import Column from './column';

export default class Body extends PureComponent {
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
      <Table style={{ backgroundColor: 'white', ...style }}>
        {React.Children.map(
          children,
          (child) => (
            <Row>
              <Column style={{
                  textAlign: 'center',
                }}
              >
                { child }
              </Column>
            </Row>
          )
        )}
      </Table>
    );
  }
}
