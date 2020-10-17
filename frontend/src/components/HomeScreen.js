import products from '../products'
import { Row, Col } from 'react-bootstrap'
import Product from './Product'

import React from 'react'

const HomeScreen = () => {
  return (
    <>
      <Row>
        {products.map((product) => {
          return (
            <Col sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          )
        })}
      </Row>
    </>
  )
}

export default HomeScreen
