import React from 'react'
import { Button, Card } from 'react-bootstrap'

const LoadMore = (props) => {
  const { loadMorePayments, isLoadingNext } = props
  return(
    <Card.Footer className='d-flex align-items-center justify-content-center'>
      <Button onClick={loadMorePayments}>
        {isLoadingNext && <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>}
        Load More
      </Button>
    </Card.Footer>
  )
}

export default LoadMore