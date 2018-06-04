import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import ReactHtmlParser from 'react-html-parser';

import { ThemeContext } from '../defaultTheme';

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
      <ThemeContext.Consumer>
        {theme => (
          <li
            style={{
              ...theme.common_text,
              ...theme.listItem,
              ...style,
            }}
          >
            {React.Children.map(children, (child) => {
              if (_.isString(child)) {
                return ReactHtmlParser(child);
              }
              return child;
            })}
          </li>
        )}
      </ThemeContext.Consumer>
    );
  }
}
