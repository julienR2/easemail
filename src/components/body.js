import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Table from './table';
import Row from './row';
import Column from './column';

import { ThemeContext } from '../defaultTheme';

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
      <ThemeContext.Consumer>
        {theme => (
          <Table style={{
              ...theme.body,
              ...style
            }}
          >
            {React.Children.map(
              children,
              (child) => {
                if (!child) {
                  return;
                }

                const { columnStyle } = child.props || {};
                const { margin, ...style } = child.props.style || {};

                return (
                  <Row>
                    <Column style={{
                        padding: margin,
                        ...(columnStyle || {}),
                      }}
                    >
                      { React.cloneElement(child, { style }) }
                    </Column>
                  </Row>
                )
              }
            )}
          </Table>
        )}
      </ThemeContext.Consumer>
    );
  }
}
