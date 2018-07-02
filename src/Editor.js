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
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onNewChange(event);
  }

  render() {
    return (
      <Card style={paneStyle}>
        <CardHeader tag="h4" style={headerStyle}>
          Featured
        </CardHeader>
        <textarea
          className="EditorArea"
          onChange={this.handleChange}
          value={this.props.input}
        />
      </Card>
    );
  }
}

export default Editor;
