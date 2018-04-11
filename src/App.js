import React, { PureComponent } from 'react';

import Email from './components/email';
import H1 from './components/h1';
import Body from './components/body';
import List from './components/list';
import ListItem from './components/listItem';

export default class App extends PureComponent {

  componentDidMount() {
    console.log(this.email.renderEmail()); // eslint-disable-line
  }

  render() {
    return (
      <Email ref={email => this.email = email}>
        <Body style={{
            backgroundImage: `url(${require('./assets/images/background.jpg')})`,
            backgroundColor: '#4C5975',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <H1>
            Vos marchés&nbsp;publics
            en 1 clic <br />
            DCE garantis
          </H1>
          <List>
            <ListItem>
              Accès instantané à tous les DCE
            </ListItem>
            <ListItem>
              Alertes, DCE et régions illimitées
            </ListItem>
            <ListItem>
              Marchés &lt;90k€ inclus
            </ListItem>
          </List>
        </Body>
      </Email>
    )
  }
}
