import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Dashboard from "./Dashboard";

/**
 * Wrapper for the dashboard
 */
class Home extends Component {

    render() {
        const { loggedIn } = this.props;

        // if a user is not logged in, go back to home page
        if(loggedIn !== true) {
            return <Redirect to='/' />
        }

        return (
            <div>
              <Dashboard />
            </div>
        )
    }
}

function mapStateToProps({ authedUser, questions }) {
    return {
        loading: questions === null,
        loggedIn: authedUser !== null
    }
}

export default connect(mapStateToProps)(Home);