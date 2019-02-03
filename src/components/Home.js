import React, {Component} from 'react';
import Dashboard from "./Dashboard";

/**
 * Wrapper for the dashboard
 */
class Home extends Component {

    render() {
        return (
            <div>
              <Dashboard />
            </div>
        )
    }
}

export default Home;