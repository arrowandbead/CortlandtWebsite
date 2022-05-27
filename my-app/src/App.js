import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import HMenu from "./components/HamburgerMenu/HamburgerMenu"
import Personal from "./components/Personal/Personal.js"
import Projects from "./components/Projects/Projects.js"
import Links from "./components/Links/Links.js"
import Resume from "./components/Resume/Resume.js"
import { BrowserRouter, Route, Routes } from 'react-router-dom';



class App extends Component {
  constructor(props){
    super(props);
    this.state = { apiResponse: ""};
  }

  callAPI() {
    fetch("http://localhost:9000/testAPI")
    .then(res => res.text())
    .then(res => this.setState({apiResponse: res, loggedIn : true}))
    .catch(err => err);
  }
  componentDidMount() {
    this.callAPI();
  }
  render() {
    return(
      <BrowserRouter>
        <div className='topLevel'>
          
          <div className='borderDiv'>
            <div className='menuHolder'>
              <HMenu></HMenu>
            </div>
            <div className='contentHolder'>
              <Routes>
                <Route path="/" element={<Personal/>}></Route>
                <Route path="/personal" element={<Personal/>}></Route>
                <Route path="/projects" element={<Projects/>}></Route>
                <Route path="/resume" element={<Resume/>}></Route>
                <Route path="/links" element={<Links/>}></Route>

              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
