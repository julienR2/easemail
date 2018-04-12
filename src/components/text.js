import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import defaultStyles from '../defaultStyles';

export default class Text extends PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
      PropTypes.string,
    ]),
    style: PropTypes.object,
    secondary: PropTypes.bool,
  };

  render() {
    const { children, style, secondary } = this.props;

    return (
      <p
        style={{
          ...defaultStyles.common_text,
          ...(secondary && defaultStyles.text_secondary),
          ...style,
        }}
      >
        { children }
      </p>
    );
  }
}
