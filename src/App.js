import React, { PureComponent } from 'react';

import Email from './components/email';
import H1 from './components/h1';
import Body from './components/body';
import Footer from './components/footer';
import List from './components/list';
import ListItem from './components/listItem';
import Button from './components/button';
import Link from './components/link';
import Image from './components/image';
import Text from './components/text';

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
            Vos marchés publics
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
          <Button href="https://nouma.fr/?utm_source=trial-14&utm_medium=email&utm_term=cta">
            Parcourir les 10 000 + appels d'offres
          </Button>
          <Text secondary>
            3574 appels d'offres publiés aujourd'hui !
          </Text>
          <Link style={{marginTop: '80px'}} href="https://nouma.fr/?utm_source=trial-14&utm_medium=email&utm_term=logo">
            <Image style={{width: '160px'}} alt="Logo_NouMa" src={require('./assets/images/logo_white.png')} />
          </Link>
        </Body>

        <Footer />
      </Email>
    )
  }
}
