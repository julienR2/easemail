import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Table from './table';
import Row from './row';
import Column from './column';
import Link from './link';
import Image from './image';

import { ThemeContext } from '../defaultTheme';

export default class Header extends PureComponent {
  static propTypes = {
    style: PropTypes.object,
  };

  render() {
    const { style } = this.props;

    return (
      <ThemeContext.Consumer>
        {theme => (
          <Table style={{
              ...theme.header,
              ...style
            }}
          >
            <Row>
              <Column>
                <Link style={{margin: '20px 0'}} href="https://nouma.fr/?utm_source=trial-14&utm_medium=email&utm_term=logo">
                  <Image style={{width: '160px'}} alt="Logo_NouMa" src="./assets/images/logo_white.png" />
                </Link>
              </Column>
            </Row>
          </Table>
        )}
      </ThemeContext.Consumer>
    );
  }
}
