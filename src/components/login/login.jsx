import React ,{useState} from 'react';
import axios from 'axios';
import Banner from '../common/banner';
import {Button,Modal} from 'react-bootstrap';

	function LoginForm(props){
	
		const [show, setShow] = useState(props.show);
		
  		const handleClose = () => setShow(false);
  		const handleShow = () => setShow(true);
		function login(){
			axios.post()
		}
		return (
			<>
			<section>
			   <div class="container mt-5">
				<div class="row justify-content-center">
					<div class="col-xl-7 col-lg-8 col-md-12 col-sm-12">
						<div class="login-form">
							<form>
								<div class="form-group">
									<label>Email</label>
									<div class="input-with-icon">
										<input type="text" class="form-control" placeholder="Email" onchange="this.setState({name=this.value})"/>
										<i class="ti-user"></i>
									</div>
								</div>
								<div class="form-group">
									<label>Password</label>
									<div class="input-with-icon">
										<input type="password" class="form-control" placeholder="*******" onchange="this.setState({password=this.value})" />
										<i class="ti-unlock"></i>
									</div>
								</div>
								<div class="form-group">
									<button type="submit" class="btn btn-md full-width theme-bg text-white">Login</button>
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

export default LoginForm