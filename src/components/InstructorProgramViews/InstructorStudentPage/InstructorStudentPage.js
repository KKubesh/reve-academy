import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

<<<<<<< HEAD:src/components/InstructorProgramViews/InstructorStudentPage.js
import Home_AllProgramsPage from '../../components/Home/Home_AllProgramsPage'
import instructorNav from '../../components/Nav/instructorNav';
=======
import Home_AllProgramsPage from '../../components/Home/Home_AllProgramsPage';
import StudentList from './StudentList';
import Nav from '../../components/Nav/Nav';
>>>>>>> 98dbc8d8da4b9d6b40d3a0849d53a122bdfad5a1:src/components/InstructorProgramViews/InstructorStudentPage/InstructorStudentPage.js

import { USER_ACTIONS } from '../../redux/actions/userActions';



const mapStateToProps = state => ({
  user: state.user,
});

class InstructorStudentPage extends Component {
  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('home');
    }
  }


  render() {

    let content = null;

    if (this.props.user.userName) {
      content = (
        <div>
          <div className="managementNav">
          <ul>
          
            <li>
              <Link to="/InstructorStudent">
                Students
              </Link>
            </li>
            <li>
              <Link to="/InstructorFeedback">
                Feedback
              </Link>
            </li>
            <li>
              <Link to="/InstructorSchedule">
                Schedule
              </Link>
            </li>
      
          </ul>
          </div>

          <h1>
            INSTRUCTOR STUDENTS PAGE
          </h1>

          {/* Students Container */}
          <div>
            <StudentList />
          </div>
          {/* End Students Container */}
        
        </div>
      );
    }

    return (
      <div>
        <instructorNav />
        {content}
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(InstructorStudentPage);