import React, { PureComponent } from 'react';
import ReactDOMServer from 'react-dom/server';

import Email from './components/email';

export default class App extends PureComponent {

  componentDidMount() {
    console.log(this.renderEmail()); // eslint-disable-line
  }

  renderEmail() {
    return `
      <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
      <html lang="fr" xmlns="http://www.w3.org/1999/xhtml" />

      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </head>
      <body>
        ${ReactDOMServer.renderToStaticMarkup(this.render())}
      </body>
    `.replace(/<div class="comment">([\s\S]*?)<\/div>/g, '$1');
  }

  render() {
    return (
      <Email ref={email => this.email = email}>
        <div>blaaa</div>
      </Email>
    )
  }
}
