import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ReactDOMServer from 'react-dom/server';

import Comment from './comment';

import jsToCss from '../utils/jsToCss';
import defaultStyles from '../defaultStyles';

export default class Email extends PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
      PropTypes.string,
    ]),
  };

  renderEmail() {
    return `
      <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
      ${ReactDOMServer.renderToStaticMarkup(this.render())}
    `.replace(/<div class="comment">([\s\S]*?)<\/div>/g, '$1')
     .replace(/(margin:)/g, 'Margin:')
     .replace(/(\.\/assets\/images\/)/g, 'http://s3.nouma.io/emails/')
  }

  render() {
    const { children } = this.props;

    return (
      <html style={defaultStyles.html} lang="fr" xmlns="http://www.w3.org/1999/xhtml">

        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700" rel="stylesheet" />
          <Comment
            text={`
              <!--[if mso]>
            		<style>
                  * {
                    ${jsToCss(defaultStyles._)}
                  }
            		</style>
            	<![endif]-->
            `}
          />
        </head>

        <body style={defaultStyles.html}>
          <center>
            <Comment
              text={`
                <!--[if (gte mso 9)|(IE)]>
                  <table cellspacing="0" cellpadding="0" border="0" align="center">
                    <tr>
                      <td width="${defaultStyles.email.maxWidth}">
                <![endif]-->
              `}
            />
            <div style={defaultStyles.email}>
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
    );
  }
}
