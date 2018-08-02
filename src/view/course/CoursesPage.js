import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component{
  state = {
    course: {
      title: null
    }
  }

  handleInput = (event) => {
    const courseW = this.state.course;
    courseW.title = event.target.value;

    this.setState({
      course : courseW
    })
  }

  handleSave = () => {
    this.props.dispatch(courseActions.createCourse(this.state.course));
  }

  render(){
    return(
      <div>
        <h1>Course</h1>
        {
          this.props.courses.map((item, index) => {
            return <div key={index}>{item.title}</div>
          })
        }
        <h2>Add course</h2>
        <input type="text"
               onChange={this.handleInput}
               value={this.state.course.title}/>
        <input type="submit"
               value="Save"
               onClick={this.handleSave}/>
      </div>
    )
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array,
  dispatch: PropTypes.func.isRequired
}
function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  }
}

export default connect(mapStateToProps)(CoursesPage);