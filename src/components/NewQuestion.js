import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from "react-router-dom";
import {handleAddQuestion} from "../actions/questions";

/**
 * Creating a new poll question
 */
class NewQuestion extends Component {
  state = {
    option1: '',
    option2: '',
    toHome: false
  };
  
  /**
   * Handles updating the state for the option changed
   *
   * @param event
   */
  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };
  
  /**
   * Handles submitting the new question
   *
   * @param event
   */
  handleSubmit = (event) => {
    event.preventDefault();
    
    const { option1, option2 } = this.state;
    const { dispatch } = this.props;
    
    dispatch(handleAddQuestion(option1, option2));
    
    // reset the state
    this.setState(() => ({
      option1: '',
      option2: '',
      toHome: true
    }));
  };
  
  render() {
    const { loggedIn } = this.props;
  
    // redirect to login if no current user
    if(loggedIn !== true) {
      return <Redirect to='/' />
    }
    // or go back to home if user has created a question
    else if(this.state.toHome === true) {
      return <Redirect to='/home' />
    }
    
    return (
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-md-8'>
              <div className="card p-3">
                <div className="card-header text-center">
                  <h2>Create New Question</h2>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className='col-form-label font-weight-bold text-left'>Complete the question:</div>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-md-12">
                    <div className="card-block">
                      <form className='p-1' onSubmit={this.handleSubmit}>
                        <span className='input-group'>
                          <p className='form-control border-0 font-weight-bold'>Would you rather...</p>
                        </span>
                        <div className="input-group justify-content-center">
                          <div className="input-group-text w-50">
                            <input className='form-control' type="text"
                                   aria-label="Enter the first option"
                                   id='option1'
                                   value={this.state.option1}
                                   placeholder='Enter the first option'
                                   onChange={this.handleChange} />
                          </div>
                        </div>
                        <span className='input-group'>
                          <p className='form-control border-0 font-weight-bold'>OR</p>
                        </span>
                        <div className="input-group justify-content-center">
                          <div className="input-group-text w-50">
                            <input className='form-control' type="text"
                                   aria-label="Enter the second option"
                                   id='option2'
                                   value={this.state.option2}
                                   placeholder='Enter the second option'
                                   onChange={this.handleChange} />
                          </div>
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

function mapStateToProps({ authedUser }) {
  return {
    loggedIn: authedUser !== null
  }
}

export default connect(mapStateToProps)(NewQuestion);