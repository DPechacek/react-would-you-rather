import React, {Component} from 'react';
import {connect} from 'react-redux';
import { handleAnswerQuestion } from "../actions/questions";
import { Redirect } from 'react-router-dom';

class QuestionDetail extends Component {
  state = {
    selectedOption: null,
    toResults: false
  };
  
  handleChange = (event) => {
    this.setState({
      selectedOption: event.target.value
    });
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
  
    const { dispatch, question } = this.props;
  
    dispatch(handleAnswerQuestion(question.id, this.state.selectedOption));
  
    this.setState({
      toResults: true
    });
  }
  
  render() {
    const { loggedIn } = this.props;
  
    if(loggedIn !== true) {
      return <Redirect to='/' />
    }
    
    const question = this.props.questions[this.props.questionId];
    const author = this.props.users[question.author];
    const backgroundImage = {
      background: `url(${author.avatarURL})`
    };
    
    if(this.state.toResults === true) {
      const { question } = this.props;
      return <Redirect to={`/results/${question.id}`} />
    }
    
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
                    <h2 className="card-title">Would you rather?</h2>
                    <form className='p-1' onSubmit={this.handleSubmit}>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <div className="input-group-text">
                            <input type="radio" id='optionOne' aria-label="Select the first option"
                                   value='optionOne'
                                   checked={this.state.selectedOption === 'optionOne'}
                                   onChange={this.handleChange}/>
                          </div>
                        </div>
                        <label className='form-control align-baseline'>{this.props.question.optionOne.text}?</label>
                      </div>
                      <span className='input-group'>
                        <p className='form-control border-0 font-weight-bold'>OR</p>
                      </span>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <div className="input-group-text">
                            <input type="radio" id='optionTwo' aria-label="Select the second option"
                                   value='optionTwo'
                                   checked={this.state.selectedOption === 'optionTwo'}
                                   onChange={this.handleChange}/>
                          </div>
                        </div>
                        <label className='form-control align-baseline'>{this.props.question.optionTwo.text}?</label>
                      </div>
                      <button className="btn btn-primary" type="submit">Submit</button>
                    </form>
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

function mapStateToProps({ questions, users, authedUser }, props) {
  const { id } = props.match.params;
  
  return {
    questions: questions,
    users: users,
    questionId: id,
    loggedIn: authedUser !== null
  }
}

export default connect(mapStateToProps)(QuestionDetail);