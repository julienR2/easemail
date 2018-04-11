import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import defaultStyles from '../defaultStyles';

export default class ListItem extends PureComponent {
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
      <li
        style={{
          ...defaultStyles.common_text,
          ...defaultStyles.listItem,
          ...style,
        }}
      >
        { children }
      </li>
    );
  }
}
