/* eslint-disable react-hooks/exhaustive-deps */
import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {  useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { GetUserList } from '../lib/services/user-list'
import styles from '../styles/Home.module.css'
import {fetchUsersPending , fetchUSersSuccess , fetchUsersError} from '../redux/actions/UsersAction';
import MainComponent from '../component/main-component/main-component'


// export const fetchData = () =>{
   
//   return async dispatch => {
//     dispatch(fetchUsersPending());
//     await fetch('https://cinemanight.chrismichael.now.sh/api/v1/series/1')
//       .then(res => res.json())
//       .then(res => {
//         if(res.error) {
//             throw(res.error);
//         }
//         dispatch(fetchUSersSuccess(res.series));
//         return res.series;
//       })
//       .catch(error => {
//         dispatch(fetchUsersError(error));
//       })
//   }
// }


export const getStaticProps: GetStaticProps = async (context) => {
  const  getUserList = await GetUserList();
  return {
    props: {
      getUserList
    }
  }
}


const Home: NextPage = ({getUserList}:any) => {
const dispatch = useDispatch()
 useEffect(() => {
    dispatch(fetchUsersPending());
    if(getUserList) {
      dispatch(fetchUSersSuccess(getUserList))
    }
 
 }, [])
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainComponent/>
    </div>
  )
}

export default Home
