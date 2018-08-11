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
                <Link style={{margin: '20px 0'}} href="https://easemail.now.sh">
                  <Image style={{width: '160px'}} alt="logo_easemail" src="./assets/images/logo.png" />
                </Link>
              </Column>
            </Row>
          </Table>
        )}
      </ThemeContext.Consumer>
    );
  }
}
