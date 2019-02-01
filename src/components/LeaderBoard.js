import React, {Component} from 'react';
import {connect} from 'react-redux';
import Leader from "./Leader";
import {Redirect} from "react-router-dom";

class LeaderBoard extends Component {
  render() {
    const { loggedIn } = this.props;
  
    if(loggedIn !== true) {
      return <Redirect to='/' />
    }
    
    return (
      <div>
        {
          Object.keys(this.props.users)
              .sort((user1Key, user2Key) => {
                const user1 = this.props.users[user1Key];
                const user2 = this.props.users[user2Key];
                const user1Score = Object.keys(user1.answers).length + user1.questions.length;
                const user2Score = Object.keys(user2.answers).length + user2.questions.length;
                
                return user2Score - user1Score;
              })
              .map((key) => (
                <Leader key={this.props.users[key].id} user={this.props.users[key]}/>
              ))
        }
      </div>
    );
  }
}

function mapStateToProps({ users, authedUser }) {
  return {
    users: users,
    loggedIn: authedUser !== null
  }
}

export default connect(mapStateToProps)(LeaderBoard);