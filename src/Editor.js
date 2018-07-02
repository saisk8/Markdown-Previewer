import React, { Component } from 'react';
import './Editor.css';
import { Card, CardHeader } from 'reactstrap';

const paneStyle = {
  borderRadius: '0px',
  width: '100%'
};
const headerStyle = {
  textAlign: 'center'
};

class Editor extends Component {
  render() {
    return (
      <Card style={paneStyle}>
        <CardHeader tag="h3" style={headerStyle}>
          Featured
        </CardHeader>
        <textarea className="EditorArea" />
      </Card>
    );
  }
}

export default Editor;
