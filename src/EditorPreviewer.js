import React, { Component } from 'react';
import './EditorPreviewer.css';
import Editor from './Editor';
import Preview from './Preview';

class EditorPreviewer extends Component {
  render() {
    return (
      <div id="App-Window">
        <div className="Editor">
          <Editor />
        </div>
        <div className="Preview">
          <Preview />
        </div>
      </div>
    );
  }
}

export default EditorPreviewer;
