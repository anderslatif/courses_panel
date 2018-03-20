import React, { Component } from 'react';

// Styles
import './styles/App.css';
import './styles/index.css';
import 'react-toastify/dist/ReactToastify.min.css';
import 'react-datepicker/dist/react-datepicker.css';
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table.min.css';

// UI Components
import Courses from "./components/courses/Courses.js";

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Course Panel</h1>
        </header>
        <Courses/>
      </div>
    );
  }
}

export default App;
