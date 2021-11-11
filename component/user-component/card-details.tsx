import React, { FC, ReactElement, useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import Image from 'next/image'
import { UserFullViewModel } from '../../types'

const CardDetails: FC<{ details?: UserFullViewModel }> = ({ details }): ReactElement => {
    const [showLoader, setShowLoader] = useState(true)
    useEffect(() => {
        if (details) {
            setShowLoader(false);
        }

    }, [details])
    return (
        <>
            {details?.picture ?
                <Card className="card-details col-md-6">

                    <Row >

                        <Col md={4} className="img-container" >

                            <Image
                                src={details.picture}
                                alt={details?.title}
                                width={120}
                                height={120}
                                layout="responsive"
                                loading="lazy"
                            />

                        </Col>
                        <Col md={8}>

                            <Card.Body>
                                <Card.Title className="card-title">{details?.title}: {details?.firstName} {details?.lastName} </Card.Title>
                                <section className="card-details-wrapper">
                                    <p>
                                        <i className="fa fa-phone" aria-hidden="true"></i>
                                        {details?.phone}
                                    </p>

                                    <p>
                                        <i className="fa fa-envelope-o" aria-hidden="true"></i>
                                        {details?.email}
                                    </p>

                                    <p>
                                        <i className="fa fa-mars-stroke" aria-hidden="true"></i>
                                        {details?.gender}
                                    </p>
                                    <p>
                                        <i className="fa  fa-birthday-cake" aria-hidden="true"></i>
                                        {(details?.dateOfBirth instanceof Date) ? details?.dateOfBirth.toLocaleDateString() : new Date(details?.dateOfBirth).toLocaleDateString()}

                                    </p>

                                </section>

                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
                :
                <div className="loader-wrapper">
                    <Image src="/images/ajax-loader.gif" alt="header-with-text"
                        width={112}
                        height={24}
                        quality={100}
                    />
                </div>
            }
        </>
    )
}

export default CardDetails
