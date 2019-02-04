import React, {Component} from 'react';
import {connect} from 'react-redux';
import { handleAnswerQuestion } from "../actions/questions";
import { Redirect } from 'react-router-dom';

/**
 * Displays the question so the user can answer it
 */
class QuestionDetail extends Component {
  state = {
    selectedOption: null,
    toResults: false
  };
  
  /**
   * Handles setting the selected option
   *
   * @param event
   */
  handleChange = (event) => {
    this.setState({
      selectedOption: event.target.value
    });
  }
  
  /**
   * Handles submitting the users answer
   *
   * @param event
   */
  handleSubmit = (event) => {
    event.preventDefault();
  
    const { dispatch, questionId } = this.props;
  
    dispatch(handleAnswerQuestion(questionId, this.state.selectedOption));
  
    this.setState({
      toResults: true
    });
  }
  
  render() {
    const question = this.props.questions[this.props.questionId];
    
    if(question === undefined || question === null) {
      return <Redirect to='/error' />
    }
    
    const author = this.props.users[question.author];
    const backgroundImage = {
      background: `url(${author.avatarURL})`
    };
  
    /**
     * redirects to question results after user answers
     */
    if(this.state.toResults === true) {
      return <Redirect to={`/results/${this.props.questionId}`} />
    }
    
    return (
      <div key={this.props.questionId} className='container'>
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
                        <label className='form-control align-baseline'>{question.optionOne.text}?</label>
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
                        <label className='form-control align-baseline'>{question.optionTwo.text}?</label>
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

function mapStateToProps({ questions, users }, props) {
  return {
    questions: questions,
    users: users,
  }
}

export default connect(mapStateToProps)(QuestionDetail);