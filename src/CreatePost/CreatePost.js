import React from "react";
import "./CreatePost.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import postModel from "../models/post.model";
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';
import config from '../config';

class CreatePost extends React.Component {
  
  constructor() {
    super()
    this.state = {tags: []}
  }

  handleChange = (tags) => {
    this.setState({tags})
  }
  
  convertToFormData = (values) => {
		const data = new FormData();
		for (let key in values) {
			Array.isArray(values[key])
				? values[key].forEach(value => data.append(key + '[]', value))
				: data.append(key, values[key]) ;
		}
		return data;
	}

  sumbit = values => {
    const formData = this.convertToFormData(values);
    fetch(config.apiUrl + '/api/posts', {
      method: "POST",
      body: formData
    }).then(res => res.json())
      .then(post => console.log(post))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="container pt-5 CreatePost">
        <h2>Create Post</h2>

        <Formik
          initialValues={{ image: "", title: "", tags: [] }}
          validationSchema={postModel}
          onSubmit={this.sumbit}
          render={({setFieldValue}) => {
            return (
              <Form className="col-xs-12 col-sm-6">
                <div className="row form-group">
                  <input 
                  type="file" 
                  name="image" 
                  id="file-upload" 
                  onChange={(event) => {
                    setFieldValue('image', event.currentTarget.files[0]);
                  }}
                  />
                  <label htmlFor="file-upload" className="custom-file-upload btn btn-info">Upload File</label>
                  <ErrorMessage
                    className="alert alert-danger"
                    name="image"
                    component="div"
                  />
                </div>

                <div className="row form-group">
                  <label>Title:</label>
                  <Field name="title" type="text" className="form-control title-wrapper" />
                  <ErrorMessage
                    className="alert alert-danger"
                    name="title"
                    component="div"
                  />
                </div>

                <div className="row form-group">
                  <label>Tags:</label>
                  <TagsInput 
                  value={this.state.tags} 
                  onChange={(tags) => {
                    this.handleChange(tags);
                    setFieldValue('tags', tags);
                }} 
                  name="tags" 
                  type="text" 
                  className="form-control"
                  />
                  <p className='TagsMessage'>press enter / tab after inserting a tag</p>
                </div>

                <div className="row form-group">
                  <button type="submit" className="btn btn-info">
                    Share
                  </button>
                </div>
              </Form>
            );
          }}
        ></Formik>
      </div>
    );
  }
}

export default CreatePost;
