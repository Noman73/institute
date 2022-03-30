import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


class User extends React.Component{

    data=this.props.user;
    componentWillMount(){
        this.props.setUser();
    }
    componentDidMount(){
        console.log('user mounted',this.props.user)
    }
    render(){
        if(!this.props.isLoaded){
            console.log('fired')
            return <div/>
        }
        return (
            <div class="col-lg-3 col-md-3">
                <div class="dashboard-navbar">
                    <div class="d-user-avater">
                        <img src={(axios.defaults.baseURL).substring(0, axios.defaults.baseURL.length - 4)+'/storage/images/user/'+this.props.user.photo} class="img-fluid avater" alt=""/>
                        <h4>{this.props.user.first_name+' '+this.props.user.last_name}</h4>
                        <span>{this.props.user.institute.bio}</span>
                        <div class="elso_syu89">
                            <ul>
                                <li><a href="#"><i class="ti-facebook"></i></a></li>
                                <li><a href="#"><i class="ti-twitter"></i></a></li>
                                <li><a href="#"><i class="ti-instagram"></i></a></li>
                                <li><a href="#"><i class="ti-linkedin"></i></a></li>
                            </ul>
                        </div>
                        <div class="elso_syu77">
                            <div class="one_third"><div class="one_45ic text-warning bg-light-warning"><i class="fas fa-star"></i></div><span>Ratings</span></div>
                            <div class="one_third"><div class="one_45ic text-success bg-light-success"><i class="fas fa-file-invoice"></i></div><span>Courses</span></div>
                            <div class="one_third"><div class="one_45ic text-purple bg-light-purple"><i class="fas fa-user"></i></div><span>Enrolled User</span></div>
                        </div>
                    </div>
                    <div class="d-navigation">
                        <ul id="side-menu">
                            <li class="active"><Link to="/dashboard"><i class="fas fa-th"></i>Dashboard</Link></li>
                            <li class="dropdown">
                                <a href="javascript:void(0);"><i class="fas fa-shopping-basket"></i>Courses<span class="ti-angle-left"></span></a>
                                <ul class="nav nav-second-level">
                                    <li><Link to="/add_course">Add Courses</Link></li>
                                    <li><a href="add-new-course.html">Add New Course</a></li>
                                    <li><a href="course-category.html">Course Category</a></li>
                                    <li><a href="coupons.html">Coupons</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>	
        )
    }
}
export default User