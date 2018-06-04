/* eslint-disable react/no-danger */
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import shortid from 'shortid';
import _ from 'lodash';

import Email from '../components/email';
import Body from '../components/body';
import Header from '../components/header';
import Footer from '../components/footer';
import List from '../components/list';
import ListItem from '../components/listItem';
import Button from '../components/button';
import Text from '../components/text';

import { ThemeContext, defaultTheme } from '../defaultTheme';

export default class Template2 extends Component {
  static propTypes = {
    text: PropTypes.string,
    list: PropTypes.array,
    pre_cta: PropTypes.string,
    cta: PropTypes.object,
  }

  static defaultProps = {
    text: 'Bonjour, <br /><br /> Vous bénéficiez actuellement d’un mois gratuit sur www.nouma.fr.<br /><br /> Cet avantage prendra fin le 22 juin 2017. Afin de continuer de profiter de toutes les fonctionalités de Nouma. nous vous invitons à vous abonner pour 29€/mois et ainsi retrouver :',
    list: [
      { key: shortid.generate(), value: '<strong>+ de 17000 appels</strong> d’offres consultables' },
      { key: shortid.generate(), value: '<strong>dont 4000 appels d’offres <90k€</strong> (exclusivité Nouma)' },
      { key: shortid.generate(), value: '<strong>Un accès instantané</strong> aux DCE' },
      { key: shortid.generate(), value: 'Une mise en relation avec des <strong>spécialistes de la réponse</strong>' },
    ],
    pre_cta: 'Pour 1€/jour, trouvez vous aussi de nouveaux clients&nbsp;!',
    cta: {
      url: 'https://nouma.fr/?utm_source=trial-14&utm_medium=email&utm_term=cta',
      text: 'M\'abonner',
    },
  }

  constructor(props) {
    super(props);

    this.state = {
      theme: _.merge(defaultTheme, {
        header: {
          backgroundColor: '#4A90E2',
          borderTopRightRadius: '8px',
          borderTopLeftRadius: '8px',
        },
        body: {
          borderTopRightRadius: 0,
          borderTopLeftRadius: 0,
          padding: '34px 16px 40px',
        },
        common_text: {
          fontFamily: "'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', 'Geneva', 'Verdana', 'sans-serif'",
          color: '#00425C',
          textAlign: 'left',
          fontSize: '14px',
          lineHeight: '20px',
        },
        listItem: {
          fontSize: '18px',
          lineHeight: '24px',
        },
        text_secondary: {
          color: '#4A90E2',
          fontWeight: '600',
        },
        button: {
          backgroundColor: '#4A90E2',
          color: '#FFFFFF',
          borderRadius: 100,
          padding: '8px 24px',
          minWidth: '296px',
          fontSize: '18px',
        },
      }),
    };
  }

  render() {
    const { text, list, cta, pre_cta } = this.props;
    const { theme } = this.state;

    return (
      <ThemeContext.Provider value={theme}>
        <Email ref={email => this.email = email}>
          <Header />
          <Body>
            <Text>
              {text}
            </Text>
            <List style={{margin: '32px 0 0'}}>
              {list.map(({ key, value }) => (
                <ListItem key={key}>
                  {value}
                </ListItem>
              ))}
            </List>
            <Text secondary style={{margin: '40px 0 0'}}>
              {pre_cta}
            </Text>
            <Button href={cta.url} style={{margin: '24px 0 0'}}>
              {cta.text}
            </Button>
          </Body>

          <Footer />
        </Email>
      </ThemeContext.Provider>
    )
  }
}
