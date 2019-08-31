import { Locality } from '../actions';
import { StoreState } from '../types/index';
import { SET_LANGUAGE, SET_COUNTRY, AUTHENTICATE} from '../constants/index';
export function locality(state: StoreState, action: Locality):     StoreState {
  
  switch (action.type) {
    case SET_LANGUAGE:
      return return { ...state, language: action.language};
    case SET_COUNTRY:
      return { ...state, language: action.country};
    case AUTHENTICATE:
      return { 
         ...state, 
         auth: {
            username: action.username, 
            authenticated: true 
          }
      };
   }
  return state;
}