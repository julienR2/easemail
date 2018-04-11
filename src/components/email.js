import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ReactDOMServer from 'react-dom/server';

import Comment from './comment';

export default class Email extends PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
      PropTypes.string,
    ]),
    maxWidth: PropTypes.number,
  };

  static defaultProps = {
    maxWidth: 600,
  }

  renderEmail() {
    return `
      <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
      <html lang="fr" xmlns="http://www.w3.org/1999/xhtml" />

      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro">
      </head>
      <body>
        ${ReactDOMServer.renderToStaticMarkup(this.render())}
      </body>
    `.replace(/<div class="comment">([\s\S]*?)<\/div>/g, '$1');
  }

  render() {
    const { children, maxWidth } = this.props;

    return (
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
        <div style={{
            maxWidth,
            marginTop: '20px',
          }}
        >
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
    );
  }
}
