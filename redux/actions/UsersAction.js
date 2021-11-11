import {  ADD_USER_DETAILS_ERROR, ADD_USER_DETAILS_SUCCESS, FETCH_USERS_ERROR, FETCH_USERS_PENDING, FETCH_USERS_SUCCESS, FETCH_USER_DETAILS_ERROR, FETCH_USER_DETAILS_PENDING, FETCH_USER_DETAILS_SUCCESS } from "./type"

export const fetchUsersPending = () =>{
    return {
      type: FETCH_USERS_PENDING
    }
  }
  

export const fetchUSersSuccess = (users) =>{
    return {
      type: FETCH_USERS_SUCCESS,
      payload: users
    }
  }

export const fetchUsersError = (error) =>{
    return {
      type: FETCH_USERS_ERROR,
      payload: error
    }
  }


  export const fetchUserDetailsPending = () =>{
    return {
      type: FETCH_USER_DETAILS_PENDING
    }
  }
  

export const fetchUSerDetailsSuccess = (users) =>{
    return {
      type: FETCH_USER_DETAILS_SUCCESS,
      payload: users
    }
  }

export const fetchUserDetailsError = (error) =>{
    return {
      type: FETCH_USER_DETAILS_ERROR,
      payload: error
    }
  }

  
  export const showAddUserDetailsMessage = (Message) =>{
    return {
      type: ADD_USER_DETAILS_SUCCESS,
      payload: Message
    }
  }

