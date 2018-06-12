import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Table from './table';
import Row from './row';
import Column from './column';
import Text from './text';
import Link from './link';
import Image from './image';

import { ThemeContext } from '../defaultTheme';

export default class Footer extends PureComponent {
  static propTypes = {
    style: PropTypes.object,
  };

  render() {
    const { style } = this.props;

    return (
      <ThemeContext.Consumer>
        {theme => (
          <Table style={{
              ...theme.footer,
              ...style
            }}
          >
            <Row>
              <Column style={{paddingTop: '28px'}}>
                <Text style={theme.footer_text}>
                  Suivez-nous sur
                </Text>
              </Column>
            </Row>
            <Row>
              <Column style={{paddingTop: '16px'}}>
                <Table style={{width: 'auto'}}>
                  <Row>
                    <Column style={{paddingRight: '44px'}}>
                      <Link href="https://www.linkedin.com/organization/6642247">
                        <Image style={{width: '32px'}} src="./assets/images/linkedin.png" alt="linkedin" />
                      </Link>
                    </Column>
                    <Column style={{paddingRight: '44px'}}>
                      <Link href="https://www.facebook.com/NouMa-177554099409101">
                        <Image style={{width: '32px'}} src="./assets/images/facebook.png" alt="facebook" />
                      </Link>
                    </Column>
                    <Column>
                      <Link href="https://twitter.com/NouMA_fr">
                        <Image style={{width: '32px'}} src="./assets/images/twitter.png" alt="twitter" />
                      </Link>
                    </Column>
                  </Row>
                </Table>
              </Column>
            </Row>
            <Row>
              <Column style={{paddingTop: '16px'}}>
                <Link href="tel:0244848600" style={{...theme.footer_text, marginRight: '12px'}}>
                  Téléphone : 02 44 84 86 00
                </Link>
                <Link href="mailto:contact@nouma.fr" style={theme.footer_text}>
                  Mail : contact@nouma.fr
                </Link>
              </Column>
            </Row>
            <Row>
              <Column style={{paddingTop: '16px'}}>
                <Text style={theme.footer_text}>
                  Si vous ne souhaitez plus recevoir d’email de NouMa,&nbsp;
                  <Link href="{{unsubscribe_url}}" style={theme.footer_text}>
                    cliquez ici
                  </Link>
                </Text>
              </Column>
            </Row>
            <Row>
              <Column style={{paddingTop: '16px'}}>
                <Text style={theme.footer_text}>
                  NouMa © {new Date().getFullYear()} Tous droits réservés
                </Text>
              </Column>
            </Row>
          </Table>
        )}
      </ThemeContext.Consumer>
    );
  }
}
