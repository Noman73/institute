import React from "react";
import axios from "axios";
import SelectInput from "../../helpers/select2/select2"

import { Editor } from 'react-draft-wysiwyg';
import '../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
class CourseForm extends React.Component {
    state={
        category:{},
        isLoaded:false
    }

    componentWillMount(){
        axios.get('institute/get-category')
        .then(res=>{
            console.log(res);
            this.setState({category:res.data});
        })
    }
    render(){

        return (
            <section>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-xl-7 col-lg-8 col-md-12 col-sm-12">
                            <form onSubmit={this.submitRequest}>
                                <div class="crs_log_wrap">
                                    <div class="crs_log__caption">
                                        <div class="rcs_log_124">
                                            <div class="Lpo09"><h4>Add New Course</h4></div>
                                            
                                            <div class="form-group">
                                                <label>Category</label>
                                                <SelectInput category={this.state.category}/>
                                            </div>
                                            <div class="form-group">
                                                <label>Title</label>
                                                <input type="text" class="form-control" placeholder="Write About You..."  />
                                            </div>
                                            <div class="form-group">
                                                <label>Description</label>
                                                <Editor wrapperClassName='description'/>
                                            </div>
                                            <div class="form-group">
                                                <label>Thumbnail</label>
                                                <input type="file" class="form-control" placeholder="Write your Qalifications..." />
                                            </div>
                                            <div class="form-group">
                                                <button type="submit" class="btn full-width btn-md theme-bg text-white">Update</button>
                                            </div>
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
        )
    }
}
export default CourseForm