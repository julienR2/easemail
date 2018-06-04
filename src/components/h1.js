import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import ReactHtmlParser from 'react-html-parser';

import { ThemeContext } from '../defaultTheme';

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
      <ThemeContext.Consumer>
        {theme => (
          <h1
            style={{
              ...theme.common_text,
              ...theme.h1,
            }}
          >
            {React.Children.map(children, (child) => {
              if (_.isString(child)) {
                return ReactHtmlParser(child);
              }
              return child;
            })}
          </h1>
        )}
      </ThemeContext.Consumer>
    );
  }
}
