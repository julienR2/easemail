/* eslint-disable react/no-danger */
import React, { Component } from 'react';
import ReactDOMServer from 'react-dom/server';
import { PropTypes } from 'prop-types';
import shortid from 'shortid';

import Email from '../components/email';

import { ThemeContext, defaultTheme } from '../defaultTheme';

export default class Template extends Component {
  static propTypes = {
    definition: PropTypes.object,
  }

  constructor(props) {
    super(props);

    this.state = {
      theme: defaultTheme,
    };

  }

  renderEmail() {
    return `
      <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
      ${ReactDOMServer.renderToStaticMarkup(this.render())}
    `.replace(/<div class="comment">([\s\S]*?)<\/div>/g, '$1')
     .replace(/(margin:)/g, 'Margin:')
     .replace(/(\.\/assets\/images\/)/g, 'http://s3.nouma.io/emails/')
  }

  renderTemplate(element) {
    const { name, component, children, ...props } = element;

    if (component) {
      return React.createElement(component, {
        key: shortid.generate(),
        ...props
      }, children ? children.map(child => this.renderTemplate(child)) : children);
    } else if (children){
      return children.map(child => this.renderTemplate(child));
    } else {
      return element;
    }
  }

  render() {
    const { definition } = this.props;
    const { theme } = this.state;

    return (
      <ThemeContext.Provider value={theme}>
        <Email ref={this.email}>
          {this.renderTemplate(definition)}
        </Email>
      </ThemeContext.Provider>
    )
  }
}
