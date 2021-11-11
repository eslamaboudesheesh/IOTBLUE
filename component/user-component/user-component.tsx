import React from 'react'
import { useSelector } from 'react-redux'
import { UserFullViewModel } from '../../types'
import CardDetails from './card-details'

function UserComponent() {
    const { MyUserDetails } = useSelector((state: any) => state.UserDetails)
    return (
        <>
            <section className="card-container">
                <CardDetails details={MyUserDetails} />
            </section>
        </>
    )
}

export default UserComponent
