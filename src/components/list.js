import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import defaultStyles from '../defaultStyles';

export default class List extends PureComponent {
  static propTypes = {
    children: PropTypes.arrayOf(PropTypes.object),
  };

  render() {
    const { children } = this.props;
    const count = React.Children.count(children) - 1;

    return (
      <ul
        style={defaultStyles.list}
      >
        {React.Children.map(
          children,
          (child, index) => (index === count) ? React.cloneElement(child, {
            ...child.props,
            style: {
              ...defaultStyles.listItem_lastChild,
              ...child.props.style,
            }
          }) : child,
        )}
      </ul>
    );
  }
}
