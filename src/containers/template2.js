/* eslint-disable react/no-danger */
import React, { Component } from 'react';
import ReactDOMServer from 'react-dom/server';
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
    text: PropTypes.object,
    list: PropTypes.object,
    post_list_text: PropTypes.object,
    pre_cta: PropTypes.object,
    cta: PropTypes.object,
    post_cta_text: PropTypes.object,
  }

  static defaultProps = {
    text: {
      visible: true,
      value: 'Hi,<br /><br /> Check out this email templating tool !',
    },
    list: {
      visible: true,
      value: [
        { key: shortid.generate(), value: '<strong>React</strong> email templating' },
        { key: shortid.generate(), value: 'Easy <strong>preview</strong>' },
        { key: shortid.generate(), value: 'Easy <strong>customization</strong>' },
      ],
    },
    post_list_text: {
      visible: true,
      value: 'ready-to-send email.',
    },
    pre_cta: {
      visible: true,
      value: 'Easing the work between dev, design, et marketing teams',
    },
    cta: {
      visible: true,
      value: {
        url: 'https://github.com/julienr2/easemail',
        text: 'Sources on Github',
      },
    },
    post_cta_text: {
      visible: true,
      value: 'Made with love by Julien',
    },
  }

  constructor(props) {
    super(props);

    this.state = {
      theme: _.merge({}, defaultTheme, {
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

  renderEmail() {
    return `
      <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
      ${ReactDOMServer.renderToStaticMarkup(this.render())}
    `.replace(/<div class="comment">([\s\S]*?)<\/div>/g, '$1')
     .replace(/(margin:)/g, 'Margin:');
  }

  render() {
    const { text, list, post_list_text, cta, pre_cta, post_cta_text } = this.props;
    const { theme } = this.state;

    return (
      <ThemeContext.Provider value={theme}>
        <Email ref={this.email}>
          <Header />
          <Body>
            {text.visible && (
              <Text>
                {text.value}
              </Text>
            )}
            {list.visible && (
              <List style={{margin: '32px 0 0'}} columnStyle={{ textAlign: 'left' }}>
                {list.value.map(({ key, value }) => (
                  <ListItem key={key}>
                    {value}
                  </ListItem>
                ))}
              </List>
            )}
            {post_list_text.visible && (
              <Text style={{margin: '32px 0 0'}}>
                {post_list_text.value}
              </Text>
            )}
            {pre_cta.visible && (
              <Text secondary style={{margin: '40px 0 0'}}>
                {pre_cta.value}
              </Text>
            )}
            {cta.visible && (
              <Button href={cta.value.url} style={{margin: '24px 0 0'}}>
                {cta.value.text}
              </Button>
            )}
            {post_cta_text.visible && (
              <Text style={{margin: '32px 0 0'}}>
                {post_cta_text.value}
              </Text>
            )}
          </Body>

          <Footer />
        </Email>
      </ThemeContext.Provider>
    )
  }
}
