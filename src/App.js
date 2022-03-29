import logo from './logo.svg';
// import './App.css';
import { Routes, Route, Link } from "react-router-dom";

import Header from './components/common/header';
import Footer from './components/common/footer';
import Banner from './components/common/banner';
import Login from './components/login/login';
import Profile from './components/signup/signup';
import Dashboard from './components/dashboard/dashboard';
import React from 'react';
import axios from "axios";
class App extends React.Component {

  state={
    user:{}
  }

  componentDidMount(){
    axios.get('/institute/user')
		.then(res=>{
		console.log(res)
    this.setState({user:res.data})
		})
  }

  setUser(){
    this.componentDidMount();
  }
  render(){
  return (
      <>
       <Header user={this.state.user} setUser={()=>{this.setUser()}} />
        <Routes>
            <Route path="/" element={<Banner />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile user={this.state.user} setUser={()=>{ this.setUser()}} />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Footer/>
      </>
    );
  }
}
export default App;
