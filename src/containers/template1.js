/* eslint-disable react/no-danger */
import React, { Component } from 'react';
import ReactDOMServer from 'react-dom/server';
import { PropTypes } from 'prop-types';
import shortid from 'shortid';

import Email from '../components/email';
import H1 from '../components/h1';
import Body from '../components/body';
import Footer from '../components/footer';
import List from '../components/list';
import ListItem from '../components/listItem';
import Button from '../components/button';
import Link from '../components/link';
import Image from '../components/image';
import Text from '../components/text';

import { ThemeContext, defaultTheme } from '../defaultTheme';

export default class Template1 extends Component {
  static propTypes = {
    title: PropTypes.object,
    list: PropTypes.object,
    cta: PropTypes.object,
    sub_cta: PropTypes.object,
  }

  static defaultProps = {
    title: {
      visible: true,
      value: `Vos marchés publics en 1 clic<br />DCE garantis`
    },
    list: {
      visible: true,
      value: [
        { key: shortid.generate(), value: 'Accès instantané à tous les DCE' },
        { key: shortid.generate(), value: 'Alertes, DCE et régions illimitées' },
        { key: shortid.generate(), value: 'Marchés &lt;90k€ inclus' },
      ],
    },
    cta: {
      visible: true,
      value: {
        url: 'https://nouma.fr/?utm_source=trial-14&utm_medium=email&utm_term=cta',
        text: 'Parcourir les 10&nbsp;000&nbsp;+ appels d\'offres',
      },
    },
    sub_cta: {
      visible: true,
      value: '3574 appels d\'offres publiés aujourd\'hui !'
    },
  }

  constructor(props) {
    super(props);

    this.state = {
      theme: defaultTheme,
    };

    this.email = React.createRef();
  }

  renderEmail() {
    return `
      <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
      ${ReactDOMServer.renderToStaticMarkup(this.render())}
    `.replace(/<div class="comment">([\s\S]*?)<\/div>/g, '$1')
     .replace(/(margin:)/g, 'Margin:')
     .replace(/(\.\/assets\/images\/)/g, 'http://s3.nouma.io/emails/')
  }

  render() {
    const { title, list, cta, sub_cta } = this.props;
    const { theme } = this.state;

    return (
      <ThemeContext.Provider value={theme}>
        <Email ref={this.email}>
          <Body style={{
              backgroundImage: 'url(./assets/images/background.jpg)',
              backgroundColor: '#4C5975',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <H1 style={{margin: '0 0 42px 0'}}>
              { title.value }
            </H1>
            <List>
              {list.value.map(({ key, value }) => (
                <ListItem key={key}>
                  {value}
                </ListItem>
              ))}
            </List>
            <Button href={cta.value.url} style={{margin: '52px 0 0'}}>
              {cta.value.text}
            </Button>
            <Text secondary style={{margin: '24px 0 0'}}>
              {sub_cta.value}
            </Text>
            <Link style={{margin: '80px 0 0'}} href="https://nouma.fr/?utm_source=trial-14&utm_medium=email&utm_term=logo">
              <Image style={{width: '160px'}} alt="Logo_NouMa" src="./assets/images/logo_white.png" />
            </Link>
          </Body>

          <Footer />
        </Email>
      </ThemeContext.Provider>
    )
  }
}
