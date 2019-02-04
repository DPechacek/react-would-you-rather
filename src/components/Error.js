import React from 'react';

/**
 * Shows the error page if a user tries to go to a link that doesn't exist
 *
 * @param props
 * @returns {*}
 */
export default function Error (props) {
  return (
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-8'>
            {/* https://www.behance.net/gallery/10286437/404-Pages*/}
            <img src='https://mir-s3-cdn-cf.behance.net/project_modules/fs/1cec7d10286437.560e2710efd2e.jpg' alt='Error 404 page'/>
          </div>
        </div>
      </div>
  );
}