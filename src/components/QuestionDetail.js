import React, {Component} from 'react';
import {connect} from 'react-redux';

class QuestionDetail extends Component {
  render() {
    const backgroundImage = {
      background: `url(${this.props.author.avatarURL})`
    };
    
    return (
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-8'>
            <div className="card p-3">
              <div className="card-header text-left">
                <h3>{this.props.author.name} asks:</h3>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="card-img-bottom p-1 rounded-circle" style={backgroundImage}>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card-block">
                    <h2 className="card-title">Would you rather?</h2>
                    <form className='p-1'>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <div className="input-group-text">
                            <input type="radio" aria-label="Radio button for following text input" value='optionOne'/>
                          </div>
                        </div>
                        <label className='form-control align-baseline'>{this.props.question.optionOne.text}</label>
                      </div>
                      <span className='input-group'>
                        <p className='form-control border-0 font-weight-bold'>OR</p>
                      </span>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <div className="input-group-text">
                            <input type="radio" aria-label="Radio button for following text input" value='option2'/>
                          </div>
                        </div>
                        <label className='form-control align-baseline'>{this.props.question.optionTwo.text}</label>
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
  const { id } = props.match.params;
  const question = questions[id];
  const author = users[question.author];
  
  return {
    question: questions[id],
    author: author
  }
}

export default connect(mapStateToProps)(QuestionDetail);