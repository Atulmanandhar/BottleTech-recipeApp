import {combineReducers} from 'redux';
import theme from './theme';
import recipe from './recipe';
import user from './user';
import cart from './cart';

export default combineReducers({theme, recipe, user, cart});
