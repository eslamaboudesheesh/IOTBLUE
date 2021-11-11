import React, { FC, ReactElement } from 'react'
import { Card, Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import Link from 'next/link'
import Image from 'next/image'
import { UserPerviewViewModel } from '../../types'



const CardsItem: FC<{ details?: UserPerviewViewModel }> = ({ details }): ReactElement => {
    return (
        <>
            <Link href={'/user/' + details?.id} passHref={true} >
                <Card className="user-Cards">
                    <Row >

                        <Col md={4} >
                            <Image
                                src={details?.picture}
                                alt={details?.title}
                                width={120}
                                height={120}
                                layout="responsive"
                                loading="lazy"
                                className="card-img-overlay"
                            />
                        </Col>
                        <Col md={8}>

                            <Card.Body>
                                <Card.Title className="card-title">{details?.title} {details?.firstName} </Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card
                                </Card.Text>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            </Link>
        </>
    )
}

export default CardsItem