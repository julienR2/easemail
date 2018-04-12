import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';

import Comment from './comment';
import Link from './link';

import defaultStyles from '../defaultStyles';

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
      <Fragment>
        <Comment
          text={`
            <!--[if mso]>
      		  	<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${href}" style="width: ${defaultStyles.button.maxWidth}; height: calc(100% + 40px); v-text-anchor: middle;" arcsize="100%" stroke="f" fillcolor="${defaultStyles.button.backgroundColor}">
      					<w:anchorlock/>
      		    	<center>
      		  <![endif]-->
          `}
        />

        <Link
          style={{ ...defaultStyles.button, ...style }}
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
    );
  }
}
