import React from 'react'
import { FETCH_USER_DETAILS_ERROR, FETCH_USER_DETAILS_PENDING, FETCH_USER_DETAILS_SUCCESS, FETCH_USERS_ERROR, FETCH_USERS_PENDING, FETCH_USERS_SUCCESS, LOAD_USER_LIST, ADD_USER_DETAILS_SUCCESS, ADD_USER_DETAILS_ERROR } from "../actions/type"


import { combineReducers } from 'redux'
const initialState = {
    MyUsersList : [],
    pending: true,
    error: null

}

const initialUserState = {
  MyUserDetails :{},
  pending: true,
  error: null

}

const initialAddUserState = {
   Message:{}

}



const UsersListReducers = (state= initialState , action) => {
  switch(action.type){
    case FETCH_USERS_PENDING:
      return{
        ...state,
        pending: true
      }
    case FETCH_USERS_SUCCESS:
      return{
        ...state,
        MyUsersList:[action.payload],
        pending: false
       
      }
    case FETCH_USERS_ERROR:
      return{
        ...state,
        pending: false,
        error: action.payload
      }

    default:
      return state;
  }

}


const UserDetailsReducers = (state= initialUserState , action) => {
  switch(action.type){
    case FETCH_USER_DETAILS_PENDING:
      return{
        ...state,
        pending: true
      }
    case FETCH_USER_DETAILS_SUCCESS:
      return{
        ...state,
        MyUserDetails:action.payload,
        pending: false
       
      }
    case FETCH_USER_DETAILS_ERROR:
      return{
        ...state,
        pending: false,
        error: action.payload
      }

    default:
      return state;
  }

}

const AddUserDetailsReducers = (state= initialAddUserState , action) => {
  switch(action.type){
   
    case ADD_USER_DETAILS_SUCCESS:
      return{
        ...state,
        Message:action.payload,
       
      }
    // case ADD_USER_DETAILS_ERROR:
    //   return{
    //     ...state,
    //     Message:action.payload,

    //   }

    default:
      return state;
  }

}
export default  combineReducers ({ UserListStateReducer:UsersListReducers , UserDetails:UserDetailsReducers , AddUserDetails : AddUserDetailsReducers}) 

