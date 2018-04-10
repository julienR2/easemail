import React, { Component } from 'react';
import { PropTypes } from 'prop-types'
import ReactDOM from 'react-dom';

export default class Comment extends Component {
    static propTypes = {
        text: PropTypes.string,
    };

    componentDidMount() {
        ReactDOM.unmountComponentAtNode(this.el);
        this.el.outerHTML = this.props.text;
    }

    render() {
        return <div ref={el => this.el = el} />;
    }
}
