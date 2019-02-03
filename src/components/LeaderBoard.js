import React, {Component} from 'react';
import {connect} from 'react-redux';
import Leader from "./Leader";

/**
 * Shows the leaderboard
 */
class LeaderBoard extends Component {
  render() {
    const { users } = this.props;
    
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

function mapStateToProps({ users }) {
  return {
    users: users
  }
}

export default connect(mapStateToProps)(LeaderBoard);