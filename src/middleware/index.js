import thunk from 'redux-thunk';
import logger from './logger';
import { applyMiddleware } from 'redux';

/**
 * Applies the desired middleware
 */
export default applyMiddleware(
    thunk,
    logger,
);