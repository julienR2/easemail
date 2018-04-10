import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Comment from '../comment';

export default class Email extends PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
    ]),
    maxWidth: PropTypes.number,
  };

  static defaultProps = {
    maxWidth: 600,
  }

  render() {
    const { children, maxWidth } = this.props;

    return (
      <div>
        <html lang="fr" xmlns="http://www.w3.org/1999/xhtml" />

        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        </head>
        <body>
          <center>
            <Comment
              text={`
                <!--[if (gte mso 9)|(IE)]>
                  <table cellspacing="0" cellpadding="0" border="0" align="center">
                    <tr>
                      <td width="${maxWidth}">
                <![endif]-->
              `}
            />
            <div className="wrapper">
              { children }
            </div>
            <Comment
              text="
                <!--[if (gte mso 9)|(IE)]>
                      </td>
                    </tr>
                  </table>
                <![endif]-->
              "
            />
          </center>
        </body>
      </div>
    );
  }
}
