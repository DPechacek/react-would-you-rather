import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getInitialQuestions } from '../actions/shared';
import Dashboard from "./Dashboard";

class Home extends Component {
    componentDidMount() {
        this.props.dispatch(getInitialQuestions())
    }

    render() {
        const { loggedIn } = this.props;

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

function mapStateToProps({ authedUser, questions}) {
    return {
        loading: questions === null,
        loggedIn: authedUser !== null
    }
}

export default connect(mapStateToProps)(Home);