import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";

/**
 * Displays the overview of the question
 */
class QuestionOverview extends Component {
  render() {
    const { questionId, questions, users, authedUser } = this.props;
  
    const question = questions[questionId];
    const author = users[question.author];
    const currentUser = users[authedUser];
    const answered = Object.keys(currentUser.answers).includes(questionId);
    const backgroundImage = {
      background: `url(${author.avatarURL})`
    };
    
    /*Based on https://stackoverflow.com/questions/39225608/bootstrap-flexbox-card-move-image-to-left-right-side-on-desktop*/
    return (
        <div className="card p-3">
          <div className="card-header text-left">
            <h3>{author.name} asks:</h3>
          </div>
          <div className="row p-1">
            <div className="col-md-6">
              <div className="card-img-bottom p-1 rounded-circle" style={backgroundImage}>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card-block p-3">
                <h2 className="card-title">Would you rather?</h2>
                <div className='p-1'>
                  <label className='form-control align-baseline border-0'>...{question.optionOne.text}...</label>
                  {
                    answered ?
                      <Link to={`/results/${question.id}`}>
                        <button className="btn btn-primary" type="submit">View Poll</button>
                      </Link>
                      :
                      <Link to={`/questions/${question.id}`}>
                        <button className="btn btn-primary" type="submit">View Poll</button>
                      </Link>
                  }
                </div>
              </div>
            </div>
          
          </div>
        </div>
    );
  }
}

function mapStateToProps({ questions, users, authedUser }) {
  return {
    authedUser: authedUser,
    questions: questions,
    users: users,
  }
}

export default connect(mapStateToProps)(QuestionOverview);