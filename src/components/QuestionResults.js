import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from "react-router-dom";

/**
 * Shows the results of the question poll
 */
class QuestionResults extends Component {
  render() {
    const {loggedIn, questionId, users, questions} = this.props;
  
    // if a user is not logged in, go back to home page
    if (loggedIn !== true) {
      return <Redirect to='/'/>
    }
  
    const question = questions[questionId];
    const author = users[question.author];
    const backgroundImage = {
      background: `url(${author.avatarURL})`
    };
    
    const totalAnswers = question.optionOne.votes.length + question.optionTwo.votes.length;
    
    return (
        <div key={this.props.id} className='container'>
          <div className='row justify-content-center'>
            <div className='col-md-8'>
              <div className="card p-3">
                <div className="card-header text-left">
                  <h3>{author.name} asks:</h3>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="card-img-bottom p-1 rounded-circle" style={backgroundImage}>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card-block">
                      <h2 className="card-title">Results:</h2>
                      <div className="container-fluid">
                        <label className='align-baseline font-weight-bold'>{question.optionOne.text}?</label>
                        <div className="progress">
                          <div className="progress-bar bg-success" role="progressbar" style={{width: '100%'}}
                               aria-valuenow={`${question.optionOne.votes.length / totalAnswers * 100}`}
                               aria-valuemin="0"
                               aria-valuemax="100">{`${parseFloat(question.optionOne.votes.length / totalAnswers * 100).toFixed(1)}`}%
                          </div>
                        </div>
                        <label
                            className='align-baseline'>{`${question.optionOne.votes.length} out of ${totalAnswers} votes`}
                          {
                            question.optionOne.votes.includes(this.props.authedUser) ?
                                (<span><b>(your vote)</b></span>) :
                                null
                          }
                        </label>
                      </div>
                      <div className="container-fluid">
                        <label className='align-baseline font-weight-bold'>{question.optionTwo.text}?</label>
                        <div className="progress">
                          <div className="progress-bar bg-success" role="progressbar" style={{width: '100%'}}
                               aria-valuenow={`${question.optionTwo.votes.length / totalAnswers * 100}`}
                               aria-valuemin="0"
                               aria-valuemax="100">{`${parseFloat(question.optionTwo.votes.length / totalAnswers * 100).toFixed(1)}`}%
                          </div>
                        </div>
                        <label
                            className='align-baseline'>{`${question.optionTwo.votes.length} out of ${totalAnswers} votes`}
                          {
                            question.optionTwo.votes.includes(this.props.authedUser) ?
                                (<span><b>(your vote)</b></span>) :
                                null
                          }
                        </label>
                      </div>
                    </div>
                  </div>
                
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

function mapStateToProps({questions, users, authedUser}, props) {
  const {id} = props.match.params;
  
  return {
    questions: questions,
    users: users,
    authedUser: authedUser,
    questionId: id,
    loggedIn: authedUser !== null
  }
}

export default connect(mapStateToProps)(QuestionResults);