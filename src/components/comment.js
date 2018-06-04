/* eslint-disable react/no-danger */
import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types'

export default class Comment extends PureComponent {
  static propTypes = {
    text: PropTypes.string,
  };

  render() {
    const { text } = this.props;
    return <div className='comment' dangerouslySetInnerHTML={{__html: text}} />;
  }
}
