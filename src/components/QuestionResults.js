import React, {Component} from 'react';
import { connect } from 'react-redux';

class QuestionResults extends Component {
  render() {
    const backgroundImage = {
      background: `url(${this.props.author.avatarURL})`
    };
    
    const question = this.props.question;
    const totalAnswers = question.optionOne.votes.length + question.optionTwo.votes.length;
    
    return (
      <div key={this.props.id} className='container'>
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
                    <h2 className="card-title">Results:</h2>
                    <div className="container-fluid">
                      <label className='align-baseline font-weight-bold'>{this.props.question.optionOne.text}?</label>
                      <div className="progress">
                        <div className="progress-bar bg-success" role="progressbar" style={{width: '100%'}}
                             aria-valuenow={`${question.optionOne.votes.length / totalAnswers * 100}`}
                             aria-valuemin="0"
                             aria-valuemax="100">{`${question.optionOne.votes.length / totalAnswers * 100}`}%
                        </div>
                      </div>
                      <label className='align-baseline'>{`${question.optionOne.votes.length} out of ${totalAnswers} votes`}?</label>
                    </div>
                    <div className="container-fluid">
                      <label className='align-baseline font-weight-bold'>{this.props.question.optionTwo.text}?</label>
                      <div className="progress">
                        <div className="progress-bar bg-success" role="progressbar" style={{width: '100%'}}
                             aria-valuenow={`${question.optionTwo.votes.length / totalAnswers * 100}`}
                             aria-valuemin="0" aria-valuemax="100">{`${question.optionTwo.votes.length / totalAnswers * 100}`}%
                        </div>
                      </div>
                      <label className='align-baseline'>{`${question.optionTwo.votes.length} out of ${totalAnswers} votes`}?</label>
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

function mapStateToProps({ questions, users }, props) {
  const { id } = props.match.params;
  const question = questions[id];
  const author = users[question.author];
  
  return {
    question: questions[id],
    author: author,
    id: props.match.params.id
  }
}

export default connect(mapStateToProps)(QuestionResults);