import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import './Editor.css';
import { Card, CardHeader } from 'reactstrap';
import MarkedownIt from 'markdown-it';

const paneStyle = {
  borderRadius: '0px',
  width: '100%'
};
const headerStyle = {
  textAlign: 'center'
};
const md = MarkedownIt();

class Preview extends Component {
  createMarkup() {
    return { __html: this.props.markdown };
  }

  render() {
    return (
      <Card style={paneStyle}>
        <CardHeader tag="h4" style={headerStyle}>
          Preview
        </CardHeader>
        <div
          style={{ overflow: 'auto' }}
          dangerouslySetInnerHTML={{ __html: md.render(this.props.markdown) }}
        />
      </Card>
    );
  }
}

export default Preview;
