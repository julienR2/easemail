import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import defaultStyles from '../defaultStyles';

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
          ...defaultStyles.text,
          ...defaultStyles.h1,
        }}
      >
        { children }
      </h1>
    );
  }
}
