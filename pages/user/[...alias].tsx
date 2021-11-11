/* eslint-disable react/no-danger */


import { GetStaticProps, NextPage } from 'next'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import UserComponent from '../../component/user-component/user-component'
import { GetUserDetails } from '../../lib/services/user-details'
import { fetchUserDetailsPending, fetchUSerDetailsSuccess } from '../../redux/actions/UsersAction'

export const getStaticProps: GetStaticProps = async (context:any ) => {

  const userId = context.params.alias.pop()
   const  getUserDetails = await GetUserDetails(userId);
  return {
    props: {
      getUserDetails
    }
  }
}


export async function getStaticPaths () {
  return {
    fallback: true,
    paths: []
  }
}

const UserDetailsPage:NextPage = ({getUserDetails}:any) => {
  
  const dispatch = useDispatch()
  useEffect(() => {
     dispatch(fetchUserDetailsPending());
     if(getUserDetails) {
       dispatch(fetchUSerDetailsSuccess(getUserDetails))
     }
  
  }, [dispatch, getUserDetails])

  return (
      <>
        <UserComponent/>
      </>
  )
}

export default UserDetailsPage
