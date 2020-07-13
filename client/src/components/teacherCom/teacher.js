import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTachometerAlt } from "@fortawesome/free-solid-svg-icons";
import { faSpellCheck } from "@fortawesome/free-solid-svg-icons";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { faUniversity } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';

class Teacher extends React.Component {
  state = {
    title: '',
    type: '',
    videoUrl: '',
    description: ''
  };

  // this function to handle Data From add videos Form
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  // this function to send data to serve to save it in database
  handleSubmit(e) {
    e.preventDefault();
    const { title, type, videoUrl, description } = this.state;
    axios
      .post('/api/', {
        title, type, videoUrl, description
      })
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="teacher">
        {/* Start Header */}

        <div className="header">
          <div className="overlay">
            <div className="container table">
              <div className="navbar">
                <span>
                  <span className="main-color wl">Edu</span>Me
                </span>
              </div>
              <div className="table-row">
                <div className="intro text-center">
                  <h1 className="upper">
                    Welcome <span className="main-color wl">Ibrahim</span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* End Header */}

        {/* Start Our Features */}


        {/* Start Main Feature */}

        <div className="features">
          <div className="container">
            <div data-feat="#courses" className="box">
              <FontAwesomeIcon icon={faFilm} />
              <h3>Courses</h3>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est.
              </p>
            </div>
            <div data-feat="#questions" className="box">
              <FontAwesomeIcon icon={faPencilAlt} />
              <h3>Questions</h3>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est.
              </p>
            </div>
            <div data-feat="#students" className="box">
              <FontAwesomeIcon icon={faUniversity} />
              <h3>Our Students</h3>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est.
              </p>
            </div>
          </div>
        </div>

        {/* End Main Feature */}


        <div className="container">

          {/* Start First Feature Added Courses */}

          <div id="courses" className="feat text-center active">
            <h4>Courses</h4>
            <p className="h1">
              In this section you can edit, delete or add videos
            </p>
            <div className="course-tabs">

              {/* Start Section Courses */}

              <div className="sections">
                <div className="vid" data-section="#add">
                  <FontAwesomeIcon icon={faPlusCircle} /> Add Video
                </div>
                <div className="vid" data-section="#view">
                  <FontAwesomeIcon icon={faEye} /> View Video
                </div>
                <div className="vid" data-section="#edit">
                  <FontAwesomeIcon icon={faEdit} /> Edit Video
                </div>
              </div>

              {/* End Section Courses */}

              <section>

                {/* Start Added Video Feature */}

                <div id="add">
                  <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="form-group" >
                      <label>Enter Video Title</label>
                      <input
                        required
                        type="text"
                        name="title"
                        className="form-control"
                        placeholder="Enter Video Title"
                        value={this.state.title}
                        onChange={this.handleChange.bind(this)}
                      />
                    </div>
                    <div className="form-group">
                      <label>Enter Video Type</label>
                      <input
                        required
                        type="text"
                        name="type"
                        className="form-control"
                        placeholder="Enter Video Type"
                        value={this.state.type}
                        onChange={this.handleChange.bind(this)} />
                    </div>
                    <div className="form-group">
                      <label>Enter Video URL</label>
                      <input
                        required
                        type="text"
                        name="videoUrl"
                        className="form-control"
                        placeholder="Enter Video URL"
                        value={this.state.videoUrl}
                        onChange={this.handleChange.bind(this)}
                      />
                    </div>
                    <div className="form-group">
                      <label>Enter Video Description</label>
                      <textarea
                        required
                        name="description"
                        placeholder="Enter Video Description"
                        className="form-control"
                        value={this.state.description}
                        onChange={this.handleChange.bind(this)}></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Add Video
                    </button>
                  </form>
                </div>

                {/* End Added Video Feature  */}


                <div id="view" >
                  <h2>view Video</h2>
                </div>
                <div id="edit" >
                  <h2>edit Video</h2>
                </div>
              </section>
            </div>
          </div>

          {/* End First Feature Added Courses */}

          <div id="questions" className="feat">
            <h1>feature two</h1>
          </div>
          <div id="students" className="feat">
            <h1>feature three</h1>
          </div>
        </div>

        {/* this div for clear float */}
        <div className="clearFix"></div>

        {/* End Our Features */}

        {/* Start Footer */}
        <footer className="text-center">
          Copyright &copy; <span>EduMe</span> 2020
        </footer>
        {/* Start Footer */}
      </div>
    );
  }
}

export default Teacher;

