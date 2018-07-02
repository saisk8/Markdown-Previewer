import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import './Editor.css';
import { Card, CardHeader } from 'reactstrap';

const paneStyle = {
  borderRadius: '0px',
  width: '100%'
};
const headerStyle = {
  textAlign: 'center'
};

class Preview extends Component {
  render() {
    return (
      <Card style={paneStyle}>
        <CardHeader tag="h4" style={headerStyle}>
          Preview
        </CardHeader>
        <ReactMarkdown source={this.props.markdown} />
      </Card>
    );
  }
}

export default Preview;
