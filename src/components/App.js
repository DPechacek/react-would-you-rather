import React, {Component, Fragment} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import LoadingBar from 'react-redux-loading';
import {connect} from 'react-redux';
import Login from "./Login";
import { handleInitialData } from "../actions/shared";
import Nav from "./Nav";
import Home from './Home';
import QuestionDetail from "./QuestionDetail";

class App extends Component {

    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }

    render() {
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
                                            <Route path='/' exact component={Login}/>
                                            <Route path='/home' exact component={Home}/>
                                            <Route path='/question/:id' component={QuestionDetail}/>
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

function mapStateToProps({users}) {
    return {
        loading: Object.keys(users).length === 0
    }
}

export default connect(mapStateToProps)(App)