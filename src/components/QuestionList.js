import React, {Component} from 'react';
import {connect} from 'react-redux';
import QuestionOverview from "./QuestionOverview";

/**
 * Displays a question list
 */
class QuestionList extends Component {
  render() {
    const questionIds = this.props.questions;
    console.log("question ids: ", questionIds);
    
    return (
        <div className='border'>
          {
            //loops over the questions to display each
            questionIds.map((questionId) => (
                <QuestionOverview key={questionId} questionId={questionId} answered={this.props.answered} />
            ))
          }
        </div>
    )
  }
}

export default connect()(QuestionList);