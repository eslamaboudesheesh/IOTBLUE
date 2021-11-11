import React, { useContext } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import CardsList from './cards-list';

function MainComponent() {
    const { MyUsersList } = useSelector((state: any) => state.UserListStateReducer)
    return (
        <>
            <CardsList data={MyUsersList[0]?.data} total={MyUsersList[0]?.limit} />
        </>
    )
}

export default MainComponent
