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
                  Follow me on
                </Text>
              </Column>
            </Row>
            <Row>
              <Column style={{paddingTop: '16px'}}>
                <Table style={{width: 'auto'}}>
                  <Row>
                    <Column style={{paddingRight: '44px'}}>
                      <Link href="https://www.linkedin.com/in/julien-rougeron-60044a3b">
                        <Image style={{width: '32px'}} src="./assets/images/linkedin.png" alt="linkedin" />
                      </Link>
                    </Column>
                    <Column style={{paddingRight: '44px'}}>
                      <Link href="https://www.facebook.com/julien.rougeron.9">
                        <Image style={{width: '32px'}} src="./assets/images/facebook.png" alt="facebook" />
                      </Link>
                    </Column>
                    <Column>
                      <Link href="https://twitter.com/julien_r2">
                        <Image style={{width: '32px'}} src="./assets/images/twitter.png" alt="twitter" />
                      </Link>
                    </Column>
                  </Row>
                </Table>
              </Column>
            </Row>
            <Row>
              <Column style={{paddingTop: '16px'}}>
                <Link href="https://julienr2.github.io" style={theme.footer_text}>
                  Portfolio : julienr2.github.io
                </Link>
              </Column>
            </Row>
          </Table>
        )}
      </ThemeContext.Consumer>
    );
  }
}
