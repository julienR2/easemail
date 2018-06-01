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
    const textStyle = {
      color: '#8893a9',
      fontSize: '16px',
      lineHeight: '25px',
      margin: '0',
    };

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
                <Text style={textStyle}>
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
                <Link href="tel:0244848600" style={{...textStyle, marginRight: '12px'}}>
                  Téléphone : 02 44 84 86 00
                </Link>
                <Link href="mailto:contact@nouma.fr" style={textStyle}>
                  Mail : contact@nouma.fr
                </Link>
              </Column>
            </Row>
            <Row>
              <Column>
                <Text style={textStyle}>
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
