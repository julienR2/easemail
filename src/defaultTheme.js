import React from 'react';

export const defaultTheme = {
  _: {
    fontFamily: "'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', 'Geneva', 'Verdana', 'sans-serif' !important",
  },
  html: {
    margin: '0 auto !important',
    padding: '0 !important',
    height: '100% !important',
    width: '100% !important',
    backgroundColor: '#F7F7F7',
  },
  email: {
    maxWidth: '600px',
    padding: '20px 0',
  },
  header: {},
  body: {
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '52px 16px 48px',
  },
  common_text: {
    textAlign: 'center',
    msoHeightRule: 'exactly',
    fontFamily: "'Source Sans Pro', 'Lucida Sans Unicode', 'Lucida Sans', 'Geneva', 'Verdana', 'sans-serif'",
    color: '#FFFFFF',
    fontSize: '28px',
    fontWeight: 400,
    MsTextSizeAdjust: '100%',
    WebkitTextSizeAdjust: '100%',
    margin: '0',
  },
  h1: {
    fontSize: '50px',
    lineHeight: '55px',
    fontWeight: 'bold',
    margin: '0',
  },
  text_secondary: {
    fontSize: '18px',
    lineHeight: '32px',
    textAlign: 'center',
  },
  table: {
    borderSpacing: '0 !important',
    tableLayout: 'fixed !important',
    margin: '0 auto !important',
    msoTableLspace: '0pt !important',
    msoTableRspace: '0pt !important',
    textAlign: 'center',
    width: '100%',
  },
  column: {
    msoTableLspace: '0pt !important',
    msoTableRspace: '0pt !important',
    textAlign: 'center',
  },
  list: {
    display: 'inline-block',
    margin: '0',
    padding: '0 0 0 28px',
    textAlign: 'left',
  },
  listItem: {
    paddingLeft: '4px',
    margin: '0 0 16px',
    textAlign: 'left',
    msoSpecialFormat: 'bullet',
    listStyle: 'disc outside',
  },
  listItem_lastChild: {
    margin: '0',
  },
  button: {
    display: 'inline-block',
    textDecoration: 'none',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: '24px',
    lineHeight: '32px',
    fontWeight: '600',
    border: 'none',
    padding: '20px 24px',
    backgroundColor: '#E74484',
    maxWidth: '328px',
    borderRadius: '8px',
  },
  link: {
    cursor: 'pointer',
    display: 'inline-block',
    textDecoration: 'none',
  },
  link_underline: {
    textDecoration: 'underline',
  },
  image: {
    msInterpolationMode: 'bicubic',
    width: '100%',
    height: 'auto',
  },
  footer: {},
  footer_text: {
    textAlign: 'center',
    color: '#8893a9',
    fontSize: '16px',
    lineHeight: '25px',
    margin: '0',
  }
}

export const ThemeContext = React.createContext(defaultTheme);
