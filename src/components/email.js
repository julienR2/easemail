import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Comment from './comment';

import { jsToCss } from '../utils';
import { ThemeContext } from '../defaultTheme';

export default class Email extends PureComponent {
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
          <html style={theme.html} lang="fr" xmlns="http://www.w3.org/1999/xhtml">

            <head>
              <meta charSet="utf-8" />
              <meta name="viewport" content="width=device-width" />
              <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
              <Comment
                text={`
                  <!--[if mso]>
                		<style>
                      * {
                        ${jsToCss(theme._)}
                      }
                		</style>
                	<![endif]-->
                `}
              />
              <Comment text="<!--[if !mso]>" />
              <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700" rel="stylesheet" />
              <Comment text="<![endif]-->" />
            </head>

            <body style={theme.html}>
              <center>
                <Comment
                  text={`
                    <!--[if (gte mso 9)|(IE)]>
                      <table cellspacing="0" cellpadding="0" border="0" align="center">
                        <tr>
                          <td width="${theme.email.maxWidth}">
                    <![endif]-->
                  `}
                />
                <div style={theme.email}>
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
          </html>
        )}
      </ThemeContext.Consumer>
    );
  }
}
