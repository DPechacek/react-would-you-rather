import React, {Component} from 'react';
import {connect} from 'react-redux';
import QuestionOverview from "./QuestionOverview";

class QuestionList extends Component {
  render() {
    const questionIds = this.props.questions;
    console.log("question ids: ", questionIds);
    
    return (
        <div className='border'>
          {
            questionIds.map((questionId) => (
                <QuestionOverview key={questionId} questionId={questionId} answered={this.props.answered} />
            ))
          }
        </div>
    )
  }
}

export default connect()(QuestionList);