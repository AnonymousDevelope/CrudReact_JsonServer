import React,{Component} from 'react';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import { Add, Main, UI, Update } from './components';
import "./style/css/style.css";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <UI/>
        <Routes>
          <Route  path="/" element={<Main />} />
          <Route path="/add" element={<Add/>} />
          <Route path="/update/:id" element={<Update/>} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;