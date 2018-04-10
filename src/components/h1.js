import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class H1 extends PureComponent {
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
      <h1
        style={{
          fontSize: 50,
          fontWeight: 'bold',
          lineHeight: '55px',
          textAlign: 'center',
        }}
      >
        { children }
      </h1>
    );
  }
}
