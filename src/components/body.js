import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Table from './table';
import Row from './row';
import Column from './column';

import defaultStyles from '../defaultStyles';

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
      <Table style={{
          ...defaultStyles.body,
          ...style
        }}
      >
        {React.Children.map(
          children,
          (child) => {
            const { margin, ...style} = child.props.style || {};

            return (
              <Row>
                <Column style={{padding: margin}}>
                  { React.cloneElement(child, { style }) }
                </Column>
              </Row>
            )
          }
        )}
      </Table>
    );
  }
}
