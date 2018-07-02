import React, { Component } from 'react';
import './EditorPreviewer.css';
import Editor from './Editor';
import Preview from './Preview';

class EditorPreviewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      tutorialText: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }

  render() {
    return (
      <div id="App-Window">
        <div className="Editor">
          <Editor props={this.state} onNewChange={this.handleChange} />
        </div>
        <div className="Preview">
          <Preview markdown={this.state.input} />
        </div>
      </div>
    );
  }
}

export default EditorPreviewer;
