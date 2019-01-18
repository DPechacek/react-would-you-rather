import React, {Component} from 'react';
import {connect} from 'react-redux';

class QuestionOverview extends Component {
  render() {
    const backgroundImage = {
      background: `url(${this.props.author.avatarURL})`
    };
    
    {/*Based on https://stackoverflow.com/questions/39225608/bootstrap-flexbox-card-move-image-to-left-right-side-on-desktop*/}
    return (
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
    );
  }
}

function mapStateToProps({ questions, users }, { questionId }) {
  const question = questions[questionId];
  const author = users[question.author];
  
  return {
    question: questions[questionId],
    author: author
  }
}

export default connect(mapStateToProps)(QuestionOverview);