// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';

const NavBar = () => (
  <div className="navbar">
    <Link to="/favorites">Favorites</Link>
  </div>
);

const Template = (props) => (
  <div>
    <NavBar />
    <p className="page-info">{props.title}:</p>
    <ul className={props.status}>
      <li>Task 1</li>
      <li>Task 2</li>
      <li>Task 3</li>
    </ul>
  </div>
);

const CurrentTasks = () => <Template title="Current Tasks" status="Current" />;

const CompletedTasks = () => (
  <Template title="Completed Tasks" status="Completed" />
);

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={CurrentTasks} />
          <Route path="/completed" component={CompletedTasks} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
