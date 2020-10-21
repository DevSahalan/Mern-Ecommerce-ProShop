import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
// import products from '../products'
import axios from 'axios'
import { listProducts } from './../actions/productActions'
import { useDispatch, useSelector } from 'react-redux'

import Loader from './Loader'
import Message from './Message'

const HomeScreen = () => {
  // const [products, setProducts] = useState([])
  const dispatch = useDispatch()
  const { loading, products, error } = useSelector((state) => state.productList)

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <h1>Latest Products</h1>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  )
}
export default HomeScreen
