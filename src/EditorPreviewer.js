import React, { Component } from 'react';
import './EditorPreviewer.css';

class EditorPreviewer extends Component {
  render() {
    return (
      <div id="App-Window">
        <div className="Editor" />
        <div className="Preview" />
      </div>
    );
  }
}

export default EditorPreviewer;
