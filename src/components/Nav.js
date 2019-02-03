import React, {Component} from 'react'
import {NavLink, withRouter} from 'react-router-dom'
import {connect} from "react-redux";
import {button} from "bootstrap";
import {logoutAuthedUser} from "../actions/authedUser";

/**
 * Nav bar for switching pages
 */
class Nav extends Component {
  
  /**
   * handles logging out
   * @param event
   */
  handleClick = (event) => {
    const {dispatch} = this.props;
    
    dispatch(logoutAuthedUser());
  }
  
  render() {
    return (
      <div className='d-flex justify-content-between'>
        <div className='p-2'>
          <nav className='nav'>
            <ul>
              <li>
                <NavLink to='/home' exact activeClassName='active'>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to='/add' exact activeClassName='active'>
                  New Question
                </NavLink>
              </li>
              <li>
                <NavLink to='/leaderboard' exact activeClassName='active'>
                  Leaderboard
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="p-2">
          {
            this.props.authedUser === null ?
              null :
              (
                <div className='d-flex justify-content-end'>
                  <div className='d-flex align-items-center justify-content-center'>
                    Hello {this.props.currentUser.name}!
                  </div>
                  <div className='p-2'>
                    <button type="button" className="btn btn-info buttonNoMargin" onClick={this.handleClick}>Logout</button>
                  </div>
                </div>
              )
          }
        </div>
      </div>
    )
  }
}

function mapStateToProps({authedUser, users}) {
  return {
    authedUser: authedUser,
    currentUser: users[authedUser]
  }
}

export default withRouter(connect(mapStateToProps)(Nav));