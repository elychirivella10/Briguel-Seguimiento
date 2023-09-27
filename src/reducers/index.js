import { combineReducers } from 'redux';
import loader from 'reducers/loaderReducer'
import login from 'reducers/loginReducer'
import sitePage from 'reducers/sitePageReducer'
import requirement from 'reducers/requirementReducer'
import responsiblesReducer from './responsiblesReducer'
import calendarReducer from './calendarReducer';


export default combineReducers({
   loader:loader,
   login:login,
   sitePage:sitePage,
   tasks:requirement,
   responsible:responsiblesReducer,
   calendar:calendarReducer
});