import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';

import Comment from './comment';
import Link from './link';

import { getPaddings } from '../utils';
import { ThemeContext } from '../defaultTheme';

export default class Button extends PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
      PropTypes.string,
    ]),
    style: PropTypes.object,
    href: PropTypes.string,
  };

  render() {
    const { children, style, href } = this.props;

    return (
      <ThemeContext.Consumer>
        {theme => (
          <Fragment>
            <Comment
              text={`
                <!--[if mso]>
          		  	<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${href}" style="width: 376px; height: calc(100% + ${getPaddings(({ ...theme.button, ...style }).padding).top} + ${getPaddings(({ ...theme.button, ...style }).padding).bottom}); v-text-anchor: middle;" arcsize="100%" stroke="f" fillcolor="${({ ...theme.button, ...style }).backgroundColor}">
          					<w:anchorlock/>
          		    	<center>
          		  <![endif]-->
              `}
            />

            <Link
              style={({ ...theme.button, ...style })}
              href={href}
            >
              { children }
            </Link>

            <Comment
              text={`
                <!--[if mso]>
          		    	</center>
          		  	</v:roundrect>
          			<![endif]-->
              `}
            />
          </Fragment>
        )}
      </ThemeContext.Consumer>
    );
  }
}
