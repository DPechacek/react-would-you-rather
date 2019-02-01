import React, {Component} from 'react';
import {connect} from 'react-redux';
import QuestionList from "./QuestionList";

/**
 * Displays the home page for the app after the user logs in.
 */
class Dashboard extends Component {
  render() {
    return (
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-md-8'>
              <ul className="nav nav-tabs nav-justified">
                <li className="nav-item">
                  <a className='nav-link active' data-toggle="tab" href="#unansweredQuestions">Unanswered Questions</a>
                </li>
                <li className="nav-item">
                  <a className='nav-link' data-toggle="tab" href="#answeredQuestions">Answered Questions</a>
                </li>
              </ul>
              {/* Shows the answered and unanswered questions */}
              <div className="tab-content">
                <div className="tab-pane active container" id="unansweredQuestions">
                  <QuestionList key='unansweredQuestions' questions={this.props.unansweredQuestionIds} answered={false}/>
                </div>
                <div className="tab-pane container" id="answeredQuestions">
                  <QuestionList key='answeredQuestions' questions={this.props.answeredQuestionIds} answered={true}/>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

function mapStateToProps({questions, users, authedUser}) {
  const currentUser = users[authedUser];
  
  return {
    answeredQuestionIds: Object.keys(questions)
        .filter((questionId) => (currentUser.answers[questionId] !== undefined))
        .sort((a, b) => questions[b].timestamp - questions[a].timestamp),
    unansweredQuestionIds: Object.keys(questions)
        .filter((questionId) => (currentUser.answers[questionId] === undefined))
        .sort((a, b) => questions[b].timestamp - questions[a].timestamp),
  }
}

export default connect(mapStateToProps)(Dashboard);