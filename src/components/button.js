import React, { PureComponent } from 'react';
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
    href: PropTypes.string,
    style: PropTypes.string,
  };

  render() {
    const { children, style, href } = this.props;

    return (
      <div>
        <Comment
          text={`
            <!--[if mso]>
      		  	<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${href}" style="width: 100%, height: 100%, v-text-anchor: middle;" arcsize="100%" stroke="f" fillcolor="${defaultStyles.button.backgroundColor}">
      					<w:anchorlock/>
      		    	<center>
      		  <![endif]-->
          `}
        />

        <Link
          style={{
            ...defaultStyles.button,
            ...style,
          }}
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
      </div>
    );
  }
}
