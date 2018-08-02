import { createStore, combineReducers } from 'redux';

const userReducer = (state = {}, action) => {
  switch(action.type){
    case 'CHANGE_USER_NAME':
      return {...state, name: action.payload}
      break;
    case 'CHANGE_USER_AGE':
      return {...state, age: action.payload}
      break;
  }
  return state;
}

const postReducer = (state = {}, action) => {
  switch(action.type){
    case 'NEW_POST': {
      return {
        ...state,
        posts : [{
          title: action.payload.title,
          body: action.payload.body
        }]
      }
    }
  }
  return state;
}

const reducers = combineReducers({
  user: userReducer,
  posts: postReducer
});


const store = createStore(reducers);

store.subscribe(() => {
  console.log('Store Change: ', store.getState())
});

store.dispatch({
  type: "CHANGE_USER_NAME",
  payload: 'Bob'
})

store.dispatch({
  type: "CHANGE_USER_AGE",
  payload: 40
})

store.dispatch({
  type: "NEW_POST",
  payload: {
    title: 'Post 1 Title',
    body: 'This is the body'
  }
})