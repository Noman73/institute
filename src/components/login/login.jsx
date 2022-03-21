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
			<Banner/>
			<Modal show={show} onHide={handleClose}>
			  <Modal.Header closeButton>
			    <Modal.Title>Login</Modal.Title>
			  </Modal.Header>
			  <Modal.Body>
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
			  </Modal.Body>

			  <Modal.Footer>
			    <Button variant="secondary" onClick={handleClose}>
		           Close
		        </Button>
		        <Button variant="primary" onClick={handleClose}>
		           Save Changes
		        </Button>
			  </Modal.Footer>
			</Modal>
			</>
		)
	}

export default LoginForm