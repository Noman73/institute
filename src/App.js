import logo from './logo.svg';
// import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import React from 'react';
import axios from "axios";
import Header from './components/common/header';
import Footer from './components/common/footer';
import Banner from './components/common/banner';
import Login from './components/login/login';
import Profile from './components/signup/signup';
import Dashboard from './components/dashboard/dashboard';
import CourseForm from './components/courses/course/form';

class App extends React.Component {

  state={
    user:{},
    isLoaded:false
  }
  componentWillMount(){
    console.log('this is from app.js')
    axios.get('/institute/user')
		.then(res=>{
		console.log(res)
    this.setState({user:res.data,isLoaded:true})
		})
  }
  setUser(){
    this.componentWillMount();
  }
  render(){
  return (
      <>
       <Header user={this.state.user} setUser={()=>{this.setUser()}}  />
        <Routes>
            <Route path="/" element={<Banner />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile user={this.state.user} setUser={()=>{ this.setUser()}} isLoaded={this.state.isLoaded}/>} />
            <Route path="/dashboard" element={<Dashboard user={this.state.user} setUser={()=>{ this.setUser()}} isLoaded={this.state.isLoaded} />} />
            <Route path="/add_course" element={<CourseForm user={this.state.user} setUser={()=>{ this.setUser()}} isLoaded={this.state.isLoaded} />} />
        </Routes>
        <Footer/>
      </>
    );
  }
}
export default App;
