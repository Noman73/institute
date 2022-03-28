import React ,{Component} from "react";
import axios from 'axios'
class SignUp extends Component{

	state={
		bio:'',
		education:''
	}
	componentDidMount(){
		console.log('profile is here');
		console.log(this.state)
		
	}
	submitRequest=(e)=>{
		console.log(123456);
		e.preventDefault()
		axios.post('/institute/user/edit',{bio:this.state.bio,education:this.state.education})
		.then(res=>{
			console.log(res);
		});
	}
    render(){
        return (
        <>
            <section>
				<div class="container">
					<div class="row justify-content-center">
						<div class="col-xl-7 col-lg-8 col-md-12 col-sm-12">
							<form onSubmit={this.submitRequest}>
								<div class="crs_log_wrap">
									<div class="crs_log__thumb">
										<img  src="assets/img/banner-2.jpg" class="img-fluid" alt="" />
									</div>
									<div class="crs_log__caption">
										<div class="rcs_log_123">
											<div class="rcs_ico"><i class="fas fa-user"></i></div>
										</div>
										<div class="rcs_log_124">
											<div class="Lpo09"><h4>Login Your Account</h4></div>
											<div class="form-group row mb-0">
												<div class="col-xl-6 col-lg-12 col-md-12 col-sm-12">
													<div class="form-group">
														<label>First Name</label>
														<input disabled type="text" class="form-control" placeholder="First Name" value={this.props.user.first_name}/>
													</div>
												</div>
												<div class="col-xl-6 col-lg-12 col-md-12 col-sm-12">
													<div class="form-group">
														<label>Last Name</label>
														<input type="text" disabled class="form-control" placeholder="Last Name" value={this.props.user.last_name}/>
													</div>
												</div>
											</div>
											<div class="form-group">
												<label>Email</label>
												<input disabled type="text" class="form-control" placeholder="support@themezhub.com" value={this.props.user.email}/>
											</div>
											<div class="form-group">
												<label>Bio</label>
												<input type="text" class="form-control" placeholder="Write About You..." onChange={(e)=>{this.setState({bio:e.target.value})}}/>
											</div>
											<div class="form-group">
												<label>Education</label>
												<input type="text" class="form-control" placeholder="Write your Qalifications..." onChange={(e)=>{this.setState({education:e.target.value})}}/>
											</div>
											<div class="form-group">
												<button type="submit" class="btn full-width btn-md theme-bg text-white">Update</button>
											</div>
										</div>
										<div class="rcs_log_125">
											<span>Or SignUp with Social Info</span>
										</div>
										<div class="rcs_log_126">
											<ul class="social_log_45 row">
												<li class="col-xl-4 col-lg-4 col-md-4 col-4"><a href="javascript:void(0);" class="sl_btn"><i class="ti-facebook text-info"></i>Facebook</a></li>
												<li class="col-xl-4 col-lg-4 col-md-4 col-4"><a href="javascript:void(0);" class="sl_btn"><i class="ti-google text-danger"></i>Google</a></li>
												<li class="col-xl-4 col-lg-4 col-md-4 col-4"><a href="javascript:void(0);" class="sl_btn"><i class="ti-twitter theme-cl"></i>Twitter</a></li>
											</ul>
										</div>
									</div>
									<div class="crs_log__footer d-flex justify-content-between">
										<div class="fhg_45"><p class="musrt">Already have account? <a href="login.html" class="theme-cl">Login</a></p></div>
										<div class="fhg_45"><p class="musrt"><a href="forgot.html" class="text-danger">Forgot Password?</a></p></div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
        </>
        )
    }
}

export default SignUp