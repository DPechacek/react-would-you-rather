import React, {Component} from 'react';
import {connect} from 'react-redux';
import Leader from "./Leader";
import {Redirect} from "react-router-dom";

/**
 * Shows the leaderboard
 */
class LeaderBoard extends Component {
  render() {
    const { loggedIn, users } = this.props;
  
    // if a user is not logged in, go back to home page
    if(loggedIn !== true) {
      return <Redirect to='/' />
    }
    
    return (
      <div>
        {
          Object.keys(this.props.users)
              .sort((user1Key, user2Key) => {
                //sorts the users by score
                const user1 = users[user1Key];
                const user2 = users[user2Key];
                const user1Score = Object.keys(user1.answers).length + user1.questions.length;
                const user2Score = Object.keys(user2.answers).length + user2.questions.length;
                
                return user2Score - user1Score;
              })
              .map((key) => (
                <Leader key={users[key].id} user={users[key]}/>
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