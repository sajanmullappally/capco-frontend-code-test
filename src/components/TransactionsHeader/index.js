import React from 'react'
import { Card, Col, Form, Row } from 'react-bootstrap'

const TransactionsHeader = (props) => {
  const { filterData } = props
  return(
    <Card.Header>
      <Row className='align-items-center'>
        <Col>Transactions</Col>
        <Col>
        <Form.Select aria-label="Status" onChange={(e) => filterData(e.target.value)}>
          <option value="">All</option>
          <option value="A">Approved</option>
          <option value="C">Cancelled</option>
          <option value="P">Pending Approval</option>
        </Form.Select>
        </Col>
      </Row>
    </Card.Header>
  )
}

export default TransactionsHeader
