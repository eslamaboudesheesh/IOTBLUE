import { AppProps } from 'next/app'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { UserPerviewViewModel, ListViewModel } from '../../types'
import CardsItem from './cards-item'


function CardsList({ data, total }: ListViewModel) {

    return (
        <>
            <section className="container my-5">

                <Row className="center-items" >
                    {data?.map(function (col: UserPerviewViewModel, id: React.Key | null | undefined): any {
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
