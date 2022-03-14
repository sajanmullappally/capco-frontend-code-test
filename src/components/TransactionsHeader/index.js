import React from 'react'
import { Card, Col, Form, Row } from 'react-bootstrap'
import { transactionFilters } from '../../constants'

const TransactionsHeader = (props) => {
  const { filterData } = props
  return(
    <Card.Header>
      <Row className='align-items-center'>
        <Col>Transactions</Col>
        <Col>
        <Form.Select aria-label="Status" onChange={(e) => filterData(e.target.value)}>
          {transactionFilters.map((filter, i) => (
            <option key={`transFilter${i}`} value={filter.value}>{filter.label}</option>
          ))}
        </Form.Select>
        </Col>
      </Row>
    </Card.Header>
  )
}

export default TransactionsHeader
