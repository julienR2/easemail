import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class List extends PureComponent {
  static propTypes = {
    children: PropTypes.arrayOf(PropTypes.object),
  };

  render() {
    const { children } = this.props;
    const count = React.Children.count(children) - 1;

    return (
      <ul
        style={{
          display: 'inline-block',
          margin: 0,
          padding: 0,
          textAlign: 'left',
        }}
      >
        {React.Children.map(
          children,
          (child, index) => {
            return React.cloneElement(child, {
              ...child.props,
              style: {
                margin: index !== count ? '0 0 16px' : '0',
                ...child.props.style,
              }
            });
          }
        )}
      </ul>
    );
  }
}
