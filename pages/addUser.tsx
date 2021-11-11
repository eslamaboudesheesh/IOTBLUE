/* eslint-disable react-hooks/exhaustive-deps */
import type { NextPage } from 'next'

import styles from '../styles/Home.module.css'

import AddNewUser from '../component/form-component/add-new-user'
import { useSelector } from 'react-redux'
import { Alert, Row } from 'react-bootstrap'
import { useEffect, useState } from 'react'





const AddUser: NextPage = () => {
  const [show, setShow] = useState(false)
  const { Message } = useSelector((state: any) => state.AddUserDetails)
  useEffect(() => {
    if (Message.Message) {
      setShow(true)
      setTimeout(() => {
        setShow(false)
      }, 6000);
    }



  }, [Message.Message])
  return (
    <div className={styles.container}>
      <AddNewUser />
      <div className='alert-wrapper'>
        <Row>
          <Alert className={`${Message.alertStyle}`} show={show} onClose={() => setShow(false)} dismissible>
            {Message.Message}
          </Alert>
        </Row>
      </div>
    </div>
  )
}

export default AddUser
