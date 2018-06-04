import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { ThemeContext } from '../defaultTheme';

export default class List extends PureComponent {
  static propTypes = {
    children: PropTypes.arrayOf(PropTypes.object),
  };

  render() {
    const { children } = this.props;
    const count = React.Children.count(children) - 1;

    return (
      <ThemeContext.Consumer>
        {theme => (
          <ul
            style={theme.list}
          >
            {React.Children.map(
              children,
              (child, index) => (index === count) ? React.cloneElement(child, {
                ...child.props,
                style: {
                  ...theme.listItem_lastChild,
                  ...child.props.style,
                }
              }) : child,
            )}
          </ul>
        )}
      </ThemeContext.Consumer>
    );
  }
}
