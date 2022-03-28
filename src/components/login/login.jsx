import React ,{useState} from 'react';
import axios from 'axios';
import Banner from '../common/banner';
import { render } from '@testing-library/react';
import {Navigate} from 'react-router-dom';


class LoginForm extends React.Component { 
	state={
		email:'',
		password:'',
		message:'',
		isAuth:false,
	}
	componentDidMount(){
	}
	 login=(e)=>{
		e.preventDefault()
		axios.post('auth/login',{email:this.state.email,password:this.state.password})
		.then((response)=>{
			console.log(response);
			if(response.status==200){
				localStorage.setItem('o_sho_auth_token_xyz',response.data.access_token);
				localStorage.setItem('o_sho_auth_token_type_xyz',response.data.token_type);
				this.setState({isAuth:true})
			}
		})
	}
	render(){
		if(this.state.isAuth){
			return <Navigate replace to="/profile"/>
		}
		return (
			<>
			<section>
			   <div class="container mt-5">
				<div class="row justify-content-center">
					<div class="col-xl-7 col-lg-8 col-md-12 col-sm-12">
						<div class="login-form">
							<form onSubmit={this.login}>
								<div class="form-group">
									<label>Email</label>
									<div class="input-with-icon">
										<input type="text" class="form-control" placeholder="Email" onChange={(e)=>{this.setState({email:btoa(e.target.value)})}}/>
										<i class="ti-user"></i>
									</div>
								</div>
								<div class="form-group">
									<label>Password</label>
									<div class="input-with-icon">
										<input type="password" class="form-control" placeholder="*******" onChange={(e)=>{this.setState({password:btoa(e.target.value)})}} />
										<i class="ti-unlock"></i>
									</div>
								</div>
								<div class="form-group">
									<button type="submit" class="btn btn-md full-width theme-bg text-white" onSubmit={this.login}>Login</button>
								</div>
								<div class="rcs_log_125 pt-2 pb-3">
									<span>Or Login with Social Info</span>
								</div>
								<div class="rcs_log_126 full">
									<ul class="social_log_45 row">
										<li class="col-xl-4 col-lg-4 col-md-4 col-4"><a href="javascript:void(0);" class="sl_btn"><i class="ti-facebook text-info"></i>Facebook</a></li>
										<li class="col-xl-4 col-lg-4 col-md-4 col-4"><a href="javascript:void(0);" class="sl_btn"><i class="ti-google text-danger"></i>Google</a></li>
										<li class="col-xl-4 col-lg-4 col-md-4 col-4"><a href="javascript:void(0);" class="sl_btn"><i class="ti-twitter theme-cl"></i>Twitter</a></li>
									</ul>
								</div>
							</form>
						</div>
					</div>
				</div>
				</div>
				</section>
			</>
		)
	}

}


export default LoginForm