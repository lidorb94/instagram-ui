import React from "react";
import "./CreatePost.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import postModel from "../models/post.model";

class CreatePost extends React.Component {
  sumbit = values => {
    console.log(values);
  };

  render() {
    return (
      <div className="container pt-5">
        <h2>Create Post</h2>

        <Formik
          initialValues={{ image: "", title: "", tags: "" }}
          validationSchema={postModel}
          onSubmit={this.sumbit}
        >
          <Form className="col-xs-12 col-sm-6">
            <div className="form-group">
              <label for="file-upload" class="custom-file-upload btn btn-info">
                Upload File
              </label>
              <Field name="image" type="file" id="file-upload" />
              <ErrorMessage
                className="alert alert-danger"
                name="image"
                component="div"
              />
            </div>

            <div className="form-group">
              <label>Title:</label>
              <Field name="title" type="text" className="form-control" />
              <ErrorMessage
                className="alert alert-danger"
                name="title"
                component="div"
              />
            </div>

            <div className="form-group">
              <label>Tags:</label>
              <Field name="tags" type="text" className="form-control" />
            </div>

            <div className="form-group">
              <button type="submit" className="btn btn-info">
                Share
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    );
  }
}

export default CreatePost;
