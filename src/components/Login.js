import React, {Component} from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from "../actions/authedUser";
import { withRouter } from 'react-router-dom';

/**
 * Shows the login page
 */
class Login extends Component {
    state = {
        selectedUser: null
    };
  
  /**
   * Handles selecting the user in the list
   *
   * @param event
   */
    handleChange = (event) => {
        const selectedUser = event.target.value;

        this.setState({
            selectedUser: selectedUser
        });
    }
  
  /**
   * Handles when the login button is pressed.
   *
   * @param event
   */
    handleSubmit = (event) => {
        event.preventDefault();

        const { selectedUser } = this.state;
        const { dispatch } = this.props;

        // Go to the home page if the user is selected.
        if(selectedUser && selectedUser !== '') {
            dispatch(setAuthedUser(selectedUser));

            this.props.history.push('/home');
        }
        else {
            alert('Please select a user');
        }
    }

    render() {
        return (
            <div>
                <div className='jumbotron text-center'>
                    <h3>Let's Play Would You Rather!</h3>
                    <p>Please sign in to continue</p>
                </div>
                <form className="custom-centered text-center" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="userName"><h4>Sign In</h4></label>
                        <select name="userName" className="form-control" id="userName" defaultValue='' onChange={this.handleChange}>
                            <option disabled='disabled' value=''>Select a user</option>
                        {
                            //displays the user list
                            this.props.users.map((user) => (
                                <option key={user.id} value={user.id}>{user.name}</option>
                            ))
                        }
                        </select>
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

function mapStateToProps({users, authedUser}) {
    return {
        users: Object.values(users),
        authedUser: authedUser
    }
}

export default withRouter(connect(mapStateToProps)(Login));
