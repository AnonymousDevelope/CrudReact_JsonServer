import React,{Component} from 'react';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import { Main, UI } from './components';
import "./style/css/style.css";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <UI/>
        <Routes>
          <Route  path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;