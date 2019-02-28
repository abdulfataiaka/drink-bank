import React, { Fragment } from 'react';

const Status = ({ type, text }) => {
  text = typeof text != 'string' ? null : text.trim();

  return (
    <div className="status-wrap">
      <div className="status">
        { type == 'loading' && (
          <Fragment>
            <img src="/images/loader.gif" />
            <span>
              { text || 'Loading' }
            </span>
          </Fragment>
        )}

        { type == 'empty' && (
          <Fragment>
            <i className="fas fa-frown"></i>
            <span>
              { text || 'No items found' }
            </span>
          </Fragment>
        )}

        { type == 'error' && (
          <Fragment>
            <i className="fas fa-exclamation-circle error"></i>
            <span>
              { text || 'Error occured while performing operation' }
            </span>
          </Fragment>
        )}
      </div>
    </div>
  )
}

export default Status;
