import React, {Component, Fragment} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LoadingBar from 'react-redux-loading';
import {connect} from 'react-redux';
import Login from "./Login";
import { handleInitialData } from "../actions/shared";
import Nav from "./Nav";
import Home from './Home';
import QuestionDetail from "./QuestionDetail";
import NewQuestion from "./NewQuestion";
import QuestionResults from "./QuestionResults";
import LeaderBoard from "./LeaderBoard";
import PrivateRoute from "./PrivateRoute";
import Error from './Error';

/**
 * Root component for the app.
 */
class App extends Component {

    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }
    
    render() {
        const { loggedIn } = this.props;
        
        return (
            <Router>
                <Fragment>
                    <LoadingBar />
                    <div className='container'>
                        <div className='row justify-content-center'>
                            <div className="col-md-12">

                                {
                                    this.props.loading === true
                                        ? null
                                        : <div>
                                            <Nav/>
                                            <Switch>
                                                <Route path='/login' exact component={Login} />
                                                <PrivateRoute path='/home' exact loggedIn={loggedIn} component={Home} />
                                                <PrivateRoute path='/questions/:questionId' loggedIn={loggedIn} component={QuestionDetail} />
                                                <PrivateRoute path='/add' exact loggedIn={loggedIn} component={NewQuestion} />
                                                <PrivateRoute path='/results/:id' loggedIn={loggedIn} component={QuestionResults} />
                                                <PrivateRoute path='/leaderboard' loggedIn={loggedIn} component={LeaderBoard} />
                                                <Route path='/error' component={Error} />
                                                <Route component={Error} />
                                            </Switch>
                                        </div>
                                }
                            </div>
                        </div>
                    </div>
                </Fragment>
            </Router>
        );
    }
}

function mapStateToProps({users, questions, authedUser}) {
    return {
        loading: Object.keys(users).length === 0 || Object.keys(questions).length === 0,
        loggedIn: authedUser !== null,
    }
}

export default connect(mapStateToProps)(App)