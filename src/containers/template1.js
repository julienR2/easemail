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
      value: `Email templating <br /> Done right !`
    },
    list: {
      visible: true,
      value: [
        { key: shortid.generate(), value: 'React email templating' },
        { key: shortid.generate(), value: 'Easy preview' },
        { key: shortid.generate(), value: 'Easy customization' },
      ],
    },
    cta: {
      visible: true,
      value: {
        url: 'https://github.com/julienr2/easemail',
        text: 'Sources on Github',
      },
    },
    sub_cta: {
      visible: true,
      value: 'Made with love by Julien'
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
     .replace(/(margin:)/g, 'Margin:');
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
          </Body>

          <Footer />
        </Email>
      </ThemeContext.Provider>
    )
  }
}
