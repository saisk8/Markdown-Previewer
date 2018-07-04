import React, { Component } from 'react';
import './Preview.css';
import { Card, CardHeader } from 'reactstrap';
import marked from 'marked';
import markdown from 'markdown-it';

const md = markdown({
  html: false,
  xhtmlOut: false,
  breaks: true,
  langPrefix: 'language-',
  linkify: true,
  typographer: true,
  quotes: '“”‘’'
});

const paneStyle = {
  borderRadius: '0px',
  width: '100%'
};
const headerStyle = {
  textAlign: 'center'
};

marked.setOptions({
  breaks: true,
  pedantic: false,
  gfm: true,
  tables: true,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
});

const renderer = new marked.Renderer();
renderer.link = function(href, title, text) {
  return `<a target="_blank" href="${href}">${text}</a>`;
};

class Preview extends Component {
  result() {
    return md.render(this.props.markdown);
  }

  render() {
    return (
      <Card style={paneStyle}>
        <CardHeader tag="h4" style={headerStyle}>
          Preview
        </CardHeader>
        <div
          id="preview"
          dangerouslySetInnerHTML={{
            __html: this.result()
          }}
        />
      </Card>
    );
  }
}

export default Preview;
