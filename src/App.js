import React, { Component } from 'react';
import './App.css';
import EditorPreviewer from './EditorPreviewer';

class App extends Component {
  render() {
    return (
      <div>
        <div className="Heading">
          <header className="App-header">
            <h2>A Markdown Previewer</h2>
            <p className="App-intro">
              A simple React App that enables you to write and preview your
              Markdown
            </p>
          </header>
        </div>
        <main>
          <EditorPreviewer />
        </main>
      </div>
    );
  }
}

export default App;
