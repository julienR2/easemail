import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

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
          paddingLeft: '4px',
          fontSize: '28px',
          lineHeight: '32px',
          ...style,
        }}
      >
        { children }
      </li>
    );
  }
}
