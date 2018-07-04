import React, { Component } from 'react';
import './Preview.css';
import { Card, CardHeader } from 'reactstrap';
import marked from 'marked';

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
  render() {
    return (
      <Card style={paneStyle}>
        <CardHeader tag="h4" style={headerStyle}>
          Preview
        </CardHeader>
        <div
          id="preview"
          dangerouslySetInnerHTML={{
            __html: marked(this.props.markdown, { renderer })
          }}
        />
      </Card>
    );
  }
}

export default Preview;
