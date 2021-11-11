import { AppProps } from 'next/app'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import CardsItem from './cards-item'


function CardsList({ data, total }: any) {

    return (
        <>
            <section className="container my-5">

                <Row className="center-items" >
                    {data?.map( function (col: any, id: React.Key | null | undefined): any {
                            return (

                                <Col xs={6} md={5} key={id}>
                                    <CardsItem details={col} />
                                </Col>
                            );
                        })}

                </Row>


            </section>
        </>
    )
}

export default CardsList
