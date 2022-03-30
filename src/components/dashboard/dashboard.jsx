import React from "react"
import User from "../accounts/user"
import CourseForm from "../courses/course/form"


class Dashboard extends React.Component {

	
    render(){

		
        return (
            <section class="gray">
				<div class="container-fluid">			
					<div class="row">
                        <User user={this.props.user} setUser={()=>{this.props.setUser()}} isLoaded={this.props.isLoaded}/>
						<div class="col-lg-9 col-md-9 col-sm-12">
							<div class="row">
								<div class="col-lg-12 col-md-12 col-sm-12 pb-4">
									<nav aria-label="breadcrumb">
										<ol class="breadcrumb">
											<li class="breadcrumb-item"><a href="#">Home</a></li>
											<li class="breadcrumb-item active" aria-current="page">Dashboard</li>
										</ol>
									</nav>
								</div>
							</div>
							<div class="row">
								<div class="col-xl-12 col-lg-12 col-md-12">
									<div class="card">
										<div class="card-header">
											<h4 class="mb-0">Admin Revenue This Year</h4>
										</div>
										<div class="card-body">
											<p>somelkjfdlkj askdfjkl salkdfjkldf</p>
											<div class="chart" id="extra-area-chart" style={{height:'300px'}}></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
        )
    }
}

export default Dashboard