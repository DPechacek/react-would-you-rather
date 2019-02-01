import React from 'react';

export default function Leader (props) {
  const backgroundImage = {
    background: `url(${props.user.avatarURL})`
  };
  
  return (
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-8'>
            <div className="card p-3">
              <div className="card-header text-left">
                <h3>{props.user.name} </h3>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="card-img-bottom p-1 rounded-circle" style={backgroundImage}>
                  </div>
                </div>
                <div className="col-md-6 d-flex align-items-center justify-content-center">
                  <div className="card-block">
                    <ul className="list-group">
                      <li className="list-group-item border-0">Answered Questions: {Object.keys(props.user.answers).length}</li>
                      <li className="list-group-item border-0">Created Questions: {props.user.questions.length}</li>
                      <li className="list-group-item border-0 font-weight-bold">Score: {Object.keys(props.user.answers).length + props.user.questions.length}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}