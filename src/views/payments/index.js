import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row, Table } from 'react-bootstrap'
import LoadMore from '../../components/LoadMore'
import TransactionsHeader from '../../components/TransactionsHeader'
import { useGetPaymentsByPageIndexQuery, useGetPaymentsQuery } from '../../services/payments'
import { getStatus } from '../../utils'

const Payments = () => {
  const { data: paymentsList } = useGetPaymentsQuery()
  const [payments, setPayments] = useState([])
  const [filteredPayments, setFilteredPayments] = useState([])
  const [filter, setFilter] = useState('')
  const [nextIndex, setNextIndex] = useState('')
  const [loadNext, setLoadNext] = useState(true)

  const { data: nextPayments, isLoading: isLoadingNext } = useGetPaymentsByPageIndexQuery(nextIndex, { skip: loadNext })

  useEffect(() => {
    if(paymentsList && paymentsList.results.length > 0){
      setPayments(paymentsList.results)
      setPagination(paymentsList.metaDatal.hasMoreElements, paymentsList.metaDatal.nextPageIndex)
    }
  }, [paymentsList])

  useEffect(() => {
    if(filter) {
      const filteredData = payments.filter(data => { 
        return data.paymentStatus === filter
      })
      setFilteredPayments(filteredData)
    } else {
      setFilteredPayments(payments)
    }
  }, [filter, payments])

  useEffect(() => {
    if(nextPayments && nextPayments.results.length > 0 && nextIndex){
      const next = [...payments].concat(nextPayments.results)
      setPayments(next)
      setLoadNext(true)
      setPagination(nextPayments.metaDatal.hasMoreElements, nextPayments.metaDatal.nextPageIndex)
    }
  }, [nextPayments])

  const setPagination = ( hasMoreElements, nextIndex ) => {
    if(hasMoreElements) setNextIndex(nextIndex)
    else setNextIndex('')
  }

  const loadMorePayments = () => {
    if(nextIndex){
      setLoadNext(false)
    }
  }

  const filterData = filter => {
    setFilter(filter)
  }

  return(
    <Container>
      <Row>
        <Col>
          <Card className='my-5'>
            <TransactionsHeader filterData={filter => filterData(filter)} />
            <Card.Body>
              <Table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Amount</th>
                    <th>Currency</th>
                    <th>Type</th>
                    <th>Date</th>
                    <th>From</th>
                    <th>To</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredPayments.map((payment, i) => (
                    <tr key={`paymentItem${i}`}>
                      <td>{i+1}</td>
                      <td>{payment.paymentAmount}</td>
                      <td>{payment.paymentCurrency}</td>
                      <td>{payment.paymentType}</td>
                      <td>{payment.paymentDate}</td>
                      <td>{payment.fromAccount.accountName}</td>
                      <td>{payment.toAccaunt.accountName}</td>
                      <td>{getStatus(payment.paymentStatus)}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <LoadMore loadMorePayments={loadMorePayments} isLoadingNext={isLoadingNext} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Payments