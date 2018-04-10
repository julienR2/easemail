import React, { PureComponent } from 'react';

import Email from './components/email';
import H1 from './components/h1';
import Body from './components/body';

export default class App extends PureComponent {

  componentDidMount() {
    console.log(this.email.renderEmail()); // eslint-disable-line
  }

  render() {
    return (
      <Email ref={email => this.email = email}>
        <Body>
          <H1>
            Vos marchés&nbsp;publics
            en 1 clic <br />
            DCE garantis
          </H1>
        </Body>
      </Email>
    )
  }
}
